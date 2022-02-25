import * as React from 'react';
import clsx from 'clsx';
import { DefaultHeaderNavProps } from '../plasmic/amap_website/PlasmicHeaderNav';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

function HeaderNav_(props: DefaultHeaderNavProps) {
  return (
    <nav {...props} className={clsx(props.className, 'font-sans font-semibold text-xl')}>
      <DesktopMenu />
      <MobileMenu />
    </nav>
  );
}

const HeaderNav = React.forwardRef(HeaderNav_);
export default HeaderNav;
