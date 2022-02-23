import * as React from "react";
import {
  PlasmicContractCard,
  DefaultContractCardProps,
} from "./plasmic/amap_website/PlasmicContractCard";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import Image from "next/image";
import Link from "next/link";

export interface ContractCardProps extends DefaultContractCardProps {
  title: string;
  slug: string;
  imageUrl: string;
}

function ContractCard_(
  { title, imageUrl, slug, ...props }: ContractCardProps,
  ref: HTMLElementRefOf<"div">
) {
  return (
    <Link href={`/contrats/${slug}`}>
      <PlasmicContractCard
        title={title}
        image={{
          render: (props, Component) => (
            <Image
              src={imageUrl}
              alt={`Photo de ${title}`}
              width={100}
              height={100}
              className="rounded-full"
            />
          ),
        }}
      />
    </Link>
  );
}

const ContractCard = React.forwardRef(ContractCard_);
export default ContractCard;
