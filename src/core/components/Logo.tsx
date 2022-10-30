import Link from 'next/link';
import Image from 'next/image';
import { Routes } from '@core/constants/routes';

type Props = React.ComponentPropsWithoutRef<'a'> & {
  width: number;
  height: number;
};

export const LogoHorizontal = ({ width, height, ...props }: Props) => {
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
};

export const LogoSquare = ({ width, height, ...props }: Props) => {
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
};

export const LogoVertical = ({ width, height, ...props }: Props) => {
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
};
