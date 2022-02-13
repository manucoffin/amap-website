import { A } from "components/ui";
import Link from "next/link";

export const DesktopMenu = ({ ...props }) => {
  return (
    <ul className="flex-row gap-12 items-stretch hidden h-full md:flex">
      <li>
        <Link href="/actus">
          <A href="/actus" className="hover:text-blue-500 transition">
            <span>Actus</span>
          </A>
        </Link>
      </li>

      <li>
        <Link href="/contrats">
          <A href="/contrats" className="hover:text-blue-500 transition">
            <span>Contrats / Adhésions</span>
          </A>
        </Link>
      </li>

      <li>
        <Link href="/contact">
          <A
            href="/contact"
            className="border p-2 border-blue-700 rounded hover:text-blue-500 hover:border-blue-500"
          >
            <span>Nous contacter</span>
          </A>
        </Link>
      </li>
    </ul>
  );
};
