import Link from 'next/link';
import { A } from 'components/ui';

export const DesktopMenu = () => {
  return (
    <ul className="flex-row gap-12 items-stretch hidden h-full md:flex">
      <li>
        <Link href="/actus" passHref>
          <A className='text-xl font-normal font-serif'  aria-label="Actus">
            <span>Actus</span>
          </A>
        </Link>
      </li>

      <li>
        <Link href="/contrats" passHref>
          <A className='text-xl font-normal font-serif'  aria-label="Contrats">
            Contrats
          </A>
        </Link>
      </li>

      <li>
        <Link href="/adhesion" passHref>
          <A className='text-xl font-normal font-serif'  aria-label="Adhérer">
            Adhérer
          </A>
        </Link>
      </li>

      <li>
        <Link href="/contact" passHref>
          <A 
            aria-label="Contact"
            className="text-xl font-normal font-serif border p-2 border-gray-500 rounded hover:no-underline hover:border-blue-500"
          >
            <span>Nous contacter</span>
          </A>
        </Link>
      </li>
    </ul>
  );
};
