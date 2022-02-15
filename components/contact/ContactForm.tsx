import * as React from "react";
import { DefaultContactFormProps } from "../plasmic/amap_website/PlasmicContactForm";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputContainer } from "./InputContainer";
import { Button } from "components/ui";
// import vegetablesRingImg from "static/images/vegetables_ring.png";

type RequestState = "IDLE" | "LOADING" | "SUCCESS" | "ERROR";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export interface ContactFormProps extends DefaultContactFormProps {}

function ContactForm_(props: ContactFormProps, ref: HTMLElementRefOf<"img">) {
  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

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
      // const formData = new FormData();

      // formData.append()
      // "form-name": "contact"

      // for (const key in data) {
      //   if (key === "field") {
      //     formData.append(key, data[key][1]);
      //   } else {
      //     formData.append(key, data[key]);
      //   }
      // }

      console.log(data);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // body: new URLSearchParams(formData as any).toString(),
        body: encode({ "form-name": "contact", ...data }),
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
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />

      {requestState === "SUCCESS" ? (
        <div className="h-[400px] flex items-center bg-[url('/static/images/vegetables_ring.png')] bg-contain bg-no-repeat bg-center">
          <div className="flex flex-col items-center w-full">
            <span className="w-full text-center justify-center text-3xl">
              Merci !
            </span>

            <span className="text-center">
              On revient vers vous
              <br />
              au plus vite...
            </span>
          </div>
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

          <InputContainer
            label="Votre adresse email"
            error={errors.email?.message}
          >
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
