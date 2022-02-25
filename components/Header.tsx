// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from 'react';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import { LinkWrapper } from 'components';
import { PlasmicHeader, DefaultHeaderProps } from './plasmic/amap_website/PlasmicHeader';

export interface HeaderProps extends DefaultHeaderProps {}

function Header_(props: HeaderProps, ref: HTMLElementRefOf<'div'>) {
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
