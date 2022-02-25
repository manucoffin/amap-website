import * as React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { DefaultLinkButtonProps } from './plasmic/amap_website/PlasmicLinkButton';

function LinkButton_({ children, href, radius, size, type }: DefaultLinkButtonProps) {
  return (
    <Link href={href}>
      <a
        href={href}
        className={clsx(
          'font-sans font-semibold text-blue-500 hover:text-blue-300 cursor-pointer',
          {
            'border border-blue-500 hover:border-blue-300': type === 'outlined',
            'bg-blue-500 hover:bg-blue-300 text-white': type === 'filled',
          },
          {
            'px-1 py-1': size === 'xs',
            'px-2 py-1': size === 'sm',
            'px-3 py-2': size === 'md',
            'px-4 py-2': size === 'lg',
            'px-5 py-3': size === 'xl',
          },
          {
            rounded: radius === 'normal',
          },
          `rounded-${radius}`
        )}
      >
        {children}
      </a>
    </Link>
  );
}

const LinkButton = React.forwardRef(LinkButton_);
export default LinkButton;
