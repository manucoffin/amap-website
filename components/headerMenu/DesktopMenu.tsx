import Link from 'next/link';
import { A } from 'components/ui';

export const DesktopMenu = () => {
  return (
    <ul className="flex-row gap-12 items-stretch hidden h-full md:flex">
      <li>
        <Link href="/actus" passHref>
          <A href="/actus">
            <span>Actus</span>
          </A>
        </Link>
      </li>

      <li>
        <Link href="/contrats" passHref>
          <A href="/contrats">Contrats</A>
        </Link>
      </li>

      <li>
        <Link href="/adherer" passHref>
          <A href="/adherer">Adhérer</A>
        </Link>
      </li>

      <li>
        <Link href="/contact" passHref>
          <A
            href="/contact"
            className="border p-2 border-gray-500 rounded hover:no-underline hover:border-blue-500"
          >
            <span>Nous contacter</span>
          </A>
        </Link>
      </li>
    </ul>
  );
};
