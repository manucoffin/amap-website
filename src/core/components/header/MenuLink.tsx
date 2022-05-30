import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';

interface MenuLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  label: string;
}

const MenuLink = ({ href, label, ...props }: MenuLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href || ''} passHref>
      <a
        className={clsx('flex items-center p-4 justify-start hover:text-primary-700 transition', {
          'bg-primary-400/10 rounded-lg text-primary-700': router.pathname === href,
        })}
        aria-label="Activities"
        {...props}
      >
        <span className="pl-4 md:pl-2  font-normal">{label}</span>
      </a>
    </Link>
  );
};

export default MenuLink;
