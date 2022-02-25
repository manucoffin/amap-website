import * as React from 'react';
import { LinkWrapper } from 'components';
import { Footer } from 'lib/netlify-types';
import { PlasmicFooter, DefaultFooterProps } from './plasmic/amap_website/PlasmicFooter';

export interface FooterProps extends DefaultFooterProps {
  data: Footer;
}

function Footer_({ data, ...props }: FooterProps) {
  return (
    <PlasmicFooter
      {...props}
      homeLink={{ render: LinkWrapper }}
      sitemapLink={{ render: LinkWrapper }}
      legalLink={{ render: LinkWrapper }}
      creditsLink={{ render: LinkWrapper }}
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
    />
  );
}

const Footer = React.forwardRef(Footer_);
export default Footer;
