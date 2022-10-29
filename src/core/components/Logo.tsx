import Link from 'next/link';
import Image from 'next/image';
import { forwardRef } from 'react';
import { Routes } from '@core/constants/routes';

type Props = React.PropsWithRef<JSX.IntrinsicElements['a']> & {
  width: number;
  height: number;
};

export const LogoHorizontal = forwardRef<HTMLAnchorElement, Props>(
  ({ width, height, ...props }) => {
    return (
      <Link href={Routes.Home()} {...props}>
        <Image
          src="/logo_h.png"
          alt="Logo de l'AMAP de la Goutte d'Eau"
          width={width}
          height={height}
          className="object-contain"
        />
      </Link>
    );
  }
);

LogoHorizontal.displayName = 'LogoHorizontal';

export const LogoSquare = forwardRef<HTMLAnchorElement, Props>(({ width, height, ...props }) => {
  return (
    <Link href={Routes.Home()} {...props}>
      <Image
        src="/logo_square.png"
        alt="Logo de l'AMAP de la Goutte d'Eau"
        width={width}
        height={height}
        className="object-contain"
      />
    </Link>
  );
});

LogoSquare.displayName = 'LogoSquare';

export const LogoVertical = forwardRef<HTMLAnchorElement, Props>(({ width, height, ...props }) => {
  return (
    <Link href={Routes.Home()} {...props}>
      <Image
        src="/img/logo_v.png"
        alt="Logo de l'AMAP de la Goutte d'Eau"
        width={width}
        height={height}
        className="object-contain"
      />
    </Link>
  );
});

LogoVertical.displayName = 'LogoVertical';
