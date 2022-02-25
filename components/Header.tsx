import * as React from 'react';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import { LinkWrapper } from 'components';
import { PlasmicHeader, DefaultHeaderProps } from './plasmic/amap_website/PlasmicHeader';

function Header_(props: DefaultHeaderProps, ref: HTMLElementRefOf<'div'>) {
  return (
    <PlasmicHeader
      root={{ ref }}
      {...props}
      logo={{
        render: LinkWrapper,
      }}
    />
  );
}

const Header = React.forwardRef(Header_);
export default Header;
