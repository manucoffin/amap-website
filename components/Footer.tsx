// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicFooter,
  DefaultFooterProps,
} from "./plasmic/amap_website/PlasmicFooter";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

import { LinkWrapper } from "components";
import { Footer } from "lib/netlify-types";

export interface FooterProps extends DefaultFooterProps {
  data: Footer;
}

function Footer_(
  { data, ...props }: FooterProps,
  ref: HTMLElementRefOf<"div">
) {
  console.log(props);
  return (
    <PlasmicFooter
      {...props}
      contactFormLink={{ render: LinkWrapper }}
      homeLink={{ render: LinkWrapper }}
      sitemapLink={{ render: LinkWrapper }}
      legalLink={{ render: LinkWrapper }}
      address={data.address}
      postCode={data.postcode}
      city={data.city}
      phoneNumber={data.phone}
      email={data.email}
      schedule={data.schedule}
    />
  );
}

const Footer = React.forwardRef(Footer_);
export default Footer;
