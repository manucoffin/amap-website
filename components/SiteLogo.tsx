import * as React from 'react';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import { PlasmicSiteLogo, DefaultSiteLogoProps } from './plasmic/amap_website/PlasmicSiteLogo';

function SiteLogo_(props: DefaultSiteLogoProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicSiteLogo root={{ ref }} {...props} />;
}

const SiteLogo = React.forwardRef(SiteLogo_);
export default SiteLogo;
