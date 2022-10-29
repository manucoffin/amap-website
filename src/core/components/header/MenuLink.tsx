import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';

interface MenuLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  label: string;
}

const MenuLink = ({ href, label, ...props }: MenuLinkProps) => {
  const router = useRouter();

  return (
    <Link
      href={href || ''}
      className={clsx('flex items-center p-4 justify-start hover:text-primary-700 transition', {
        'text-primary-700': router.pathname === href,
      })}
      aria-label="Activities"
      {...props}
    >
      <span className="pl-4 md:pl-2  font-normal">{label}</span>
    </Link>
  );
};

export default MenuLink;
