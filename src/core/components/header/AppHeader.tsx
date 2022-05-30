import clsx from 'clsx';
import { LogoHorizontal, LogoSquare } from '@core/components/Logo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { useEffect, useState } from 'react';

interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {
  variant?: 'minimal' | 'full';
}

const Header = ({ variant = 'full', className, ...props }: HeaderProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        className,
        'py-4 px-4 sticky top-0',
        'sticky top-0 z-[9999] ease-in duration-200',
        {
          'bg-white': scrollPosition > 0,
        }
      )}
      {...props}
    >
      <div
        className={clsx(
          { 'max-w-screen-xl mx-auto justify-between': variant === 'full' },
          { 'justify-center': variant === 'minimal' },
          'flex items-center'
        )}
      >
        <LogoHorizontal className="hidden md:block" width={280} height={40} />
        <LogoSquare className="md:hidden" width={35} height={35} />

        {variant === 'full' ? (
          <>
            <DesktopMenu />
            <MobileMenu />
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
