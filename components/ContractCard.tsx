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
  slug: string;
  imageUrl: string;
}

function ContractCard_(
  { title, imageUrl, slug, ...props }: ContractCardProps,
  ref: HTMLElementRefOf<"div">
) {
  return <PlasmicContractCard title={title} />;
}

const ContractCard = React.forwardRef(ContractCard_);
export default ContractCard;
