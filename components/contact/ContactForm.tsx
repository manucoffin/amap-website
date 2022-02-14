import * as React from "react";
import {
  PlasmicContactForm,
  DefaultContactFormProps,
} from "../plasmic/amap_website/PlasmicContactForm";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useState } from "react";
import { CheckCircleIcon, PhoneIcon, MailIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputContainer } from "./InputContainer";
import { Button } from "components/ui";

type RequestState = "IDLE" | "LOADING" | "SUCCESS" | "ERROR";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export interface ContactFormProps extends DefaultContactFormProps {}

function ContactForm_(props: ContactFormProps, ref: HTMLElementRefOf<"img">) {
  const [requestState, setRequestState] = useState<RequestState>("IDLE");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>({ mode: "onSubmit" });

  const onSubmit: SubmitHandler<FormValues> = async (data, e) => {
    e.preventDefault();
    setRequestState("LOADING");

    try {
      const formData = new FormData();

      for (const key in data) {
        if (key === "field") {
          formData.append(key, data[key][1]);
        } else {
          formData.append(key, data[key]);
        }
      }

      console.log(formData);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!response.ok) throw new Error("An error occured");

      setRequestState("SUCCESS");
      reset({ name: "", email: "", message: "" });
    } catch (e) {
      setRequestState("ERROR");
    }
  };

  return (
    <form
      className="font-sans w-full"
      id="contact-form"
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={handleSubmit(onSubmit)}
    >
      {requestState === "SUCCESS" ? (
        <div className="flex flex-col md:flex-row items-center justify-center my-32">
          <CheckCircleIcon className="w-24 h-24 mb-4 md:mb-0 md:mr-10 text-green-500"></CheckCircleIcon>
          <span className="text-xl">
            Merci de votre message, nous reviendrons vers vous au plus vite !
          </span>
        </div>
      ) : (
        <>
          <InputContainer label="Votre nom" error={errors.name?.message}>
            <input
              {...register("name", { required: "Ce champs est requis" })}
              className="block w-full bg-gray-200 text-base px-4 py-3 leading-tight text-gray-700 border border-white rounded appearance-none focus:outline-none focus:border focus:border-blue-500"
              type="text"
            />
          </InputContainer>

          <InputContainer label="Email" error={errors.email?.message}>
            <input
              {...register("email", { required: "Ce champs est requis" })}
              className="block w-full bg-gray-200 text-base px-4 py-3 leading-tight text-gray-700 border border-white rounded appearance-none focus:outline-none focus:border focus:border-blue-500"
              type="email"
            />
          </InputContainer>

          <InputContainer label="Message" error={errors.message?.message}>
            <textarea
              {...register("message", { required: "Ce champs est requis" })}
              className="block w-full bg-gray-200 text-base h-48 px-4 py-3 leading-tight text-gray-700 border border-white rounded appearance-none resize-none no-resize focus:outline-none focus:border focus:border-blue-500"
            />
          </InputContainer>

          <Button
            size="large"
            className="grid place-content-center"
            type="submit"
            loading={requestState === "LOADING"}
          >
            <span>Envoyer</span>
          </Button>
        </>
      )}
    </form>
  );
}

const ContactForm = React.forwardRef(ContactForm_);
export default ContactForm;
