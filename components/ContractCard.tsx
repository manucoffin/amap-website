import * as React from "react";
import {
  PlasmicContractCard,
  DefaultContractCardProps,
} from "./plasmic/amap_website/PlasmicContractCard";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface ContractCardProps extends DefaultContractCardProps {}

function ContractCard_(props: ContractCardProps, ref: HTMLElementRefOf<"div">) {
  return (
    <PlasmicContractCard
      root={{ ref }}
      {...props}
      downloadButton={{
        wrap: (node) => (
          <a href={"/download-url"} download>
            {node}
          </a>
        ),
      }}
    />
  );
}

const ContractCard = React.forwardRef(ContractCard_);
export default ContractCard;
