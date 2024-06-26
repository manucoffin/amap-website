import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';

export type ButtonLinkProps = Omit<React.ComponentPropsWithoutRef<'a'>, 'href'> &
  Omit<LinkProps, 'as' | 'passHref' | 'children'> & {
    variant?: 'text' | 'plain' | 'outlined';
    size?: 'base' | 'xs' | 'sm' | 'md' | 'lg';
    decoration?: 'none' | 'underline';
  };

const ButtonLink = ({
  className,
  variant = 'text',
  size = 'md',
  decoration = 'none',
  href,
  children,
  ...props
}: ButtonLinkProps) => (
  <Link
    href={href}
    {...props}
    className={clsx(
      className,
      'transition cursor-pointer rounded-lg',
      {
        'py-0 px-0': size === 'base',
        'py-px px-1': size === 'xs',
        'py-1 px-2': size === 'sm',
        'py-2 px-3': size === 'md',
        'py-3 px-4': size === 'lg',
      },
      {
        'underline underline-offset-1': decoration === 'underline',
      },
      {
        'text-primary-500 hover:text-primary-700': variant === 'text' && !className,
      },
      { 'text-primary-800 bg-primary-100 hover:bg-primary-200': variant === 'plain' },
      {
        'text-primary-500 border border-primary-500 hover:border-primary-700 hover:text-primary-700':
          variant === 'outlined' && !className,
      }
    )}
  >
    {children}
  </Link>
);

export default ButtonLink;
