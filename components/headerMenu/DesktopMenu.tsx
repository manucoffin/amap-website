import { A } from "components/ui";
import Link from "next/link";

export const DesktopMenu = ({ ...props }) => {
  return (
    <ul className="flex-row gap-12 items-stretch hidden h-full md:flex">
      <li>
        <Link href="/actus">
          <A href="/actus">
            <span>Actus</span>
          </A>
        </Link>
      </li>

      <li>
        <Link href="/contrats">
          <A href="/contrats">Contrats</A>
        </Link>
      </li>

      <li>
        <Link href="/adherer">
          <A href="/adherer">Adhérer</A>
        </Link>
      </li>

      <li>
        <Link href="/contact">
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
