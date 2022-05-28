import * as React from 'react';

import { LinkWrapper } from 'src/core/components';
import { Footer } from 'src/core/lib/netlify-types';
import { PlasmicFooter, DefaultFooterProps } from './plasmic/amap_website/PlasmicFooter';

export interface FooterProps extends DefaultFooterProps {
  data: Footer;
}

function Footer_({ data, ...props }: FooterProps) {
  return (
    <PlasmicFooter
      homeLink={{ render: LinkWrapper }}
      sitemapLink={{ render: LinkWrapper }}
      legalLink={{ render: LinkWrapper }}
      privacyPolicyLink={{ render: LinkWrapper }}
      address={data?.address}
      postCode={data?.postcode}
      city={data?.city}
      schedule={data?.schedule}
      email={{
        render: (props) => (
          <a href={`mailto:${data?.email}`} className={props.className}>
            {data?.email}
          </a>
        ),
      }}
      phone={{
        render: (props) => (
          <a href={`tel:${data?.phone}`} className={props.className}>
            {data?.phone}
          </a>
        ),
      }}
      {...props}
    />
  );
}

const Footer = React.forwardRef(Footer_);
export default Footer;
