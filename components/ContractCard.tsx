import * as React from "react";
import {
  PlasmicContractCard,
  DefaultContractCardProps,
} from "./plasmic/amap_website/PlasmicContractCard";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import Image from "next/image";
import { DocumentDownloadIcon } from "@heroicons/react/outline";
import { useState } from "react";
import clsx from "clsx";

export interface ContractCardProps extends DefaultContractCardProps {
  title: string;
  description: string;
  documentUrl: string;
  imageUrl: string;
}

function ContractCard_(
  { title, description, documentUrl, imageUrl, ...props }: ContractCardProps,
  ref: HTMLElementRefOf<"div">
) {
  const [isInfosVisible, setIsInfosVisible] = useState(false);

  return (
    <PlasmicContractCard
      root={{ ref }}
      {...props}
      icon={
        <div className="relative w-[120px] h-[120px]">
          <Image src={imageUrl} layout="fill" />
        </div>
      }
      title={title}
      description={
        <div className="flex flex-col">
          <div
            className={clsx(
              "transition-[max-height] duration-[1000ms] overflow-hidden",
              {
                "max-h-5 truncate": !isInfosVisible,
              },
              {
                "max-h-80": isInfosVisible,
              }
            )}
          >
            {description}
          </div>
          <span
            onClick={() => setIsInfosVisible(!isInfosVisible)}
            className="self-end text-blue-500 hover:text-blue-300 cursor-pointer"
          >
            {isInfosVisible ? <>Masquer</> : <>Afficher tout</>}
          </span>
        </div>
      }
      downloadButton={{
        render: (props, Component) => (
          <a href={documentUrl} download>
            <span className="flex font-sans text-blue-500 hover:text-blue-300">
              <DocumentDownloadIcon className="w-5 h-5" /> Télécharger
            </span>
          </a>
        ),
      }}
    />
  );
}

const ContractCard = React.forwardRef(ContractCard_);
export default ContractCard;
