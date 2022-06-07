import Link from 'next/link';
import Image from 'next/image';
import { forwardRef } from 'react';
import { Routes } from '@core/constants/routes';

type Props = React.PropsWithRef<JSX.IntrinsicElements['a']> & {
  width: number;
  height: number;
};

export const LogoHorizontal = forwardRef<HTMLAnchorElement, Props>(
  ({ width, height, ...props }, ref) => {
    return (
      <Link href={Routes.Home()} passHref>
        <a {...props} ref={ref}>
          <Image
            src="/logo_h.png"
            alt="Logo de l'AMAP de la Goutte d'Eau"
            width={width}
            height={height}
            objectFit="contain"
          />
        </a>
      </Link>
    );
  }
);

LogoHorizontal.displayName = 'LogoHorizontal';

export const LogoSquare = forwardRef<HTMLAnchorElement, Props>(
  ({ width, height, ...props }, ref) => {
    return (
      <Link href={Routes.Home()} passHref>
        <a {...props} ref={ref}>
          <Image
            src="/logo_square.png"
            alt="Logo de l'AMAP de la Goutte d'Eau"
            width={width}
            height={height}
            objectFit="contain"
          />
        </a>
      </Link>
    );
  }
);

LogoSquare.displayName = 'LogoSquare';

export const LogoVertical = forwardRef<HTMLAnchorElement, Props>(
  ({ width, height, ...props }, ref) => {
    return (
      <Link href={Routes.Home()} passHref>
        <a {...props} ref={ref}>
          <Image
            src="/img/logo_v.png"
            alt="Logo de l'AMAP de la Goutte d'Eau"
            width={width}
            height={height}
            objectFit="contain"
          />
        </a>
      </Link>
    );
  }
);

LogoVertical.displayName = 'LogoVertical';
