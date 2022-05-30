import { ChevronDownIcon } from '@heroicons/react/outline';
import { ButtonLink, MenuLink } from '@src/core/components';
import { Routes } from '@src/core/constants/routes';

type Props = React.ComponentPropsWithoutRef<'nav'>;

const DesktopMenu = ({ ...props }: Props) => {
  return (
    <nav {...props} className="hidden md:flex text-gray-700">
      <MenuLink href={'/actus'} label="Actus" />
      <div className="group inline-block relative">
        <button className=" flex items-center p-4 justify-start hover:text-primary-700 transition">
          <span className="mr-2">La Goutte d&apos;Eau</span>
          <ChevronDownIcon className="w-4" />
        </button>

        <ul className="absolute hidden group-hover:block z-10 bg-white rounded-md min-w-[200px] shadow-lg">
          <MenuLink href={'/contrats'} label="Contrats" />
          <MenuLink href={'/producteurs'} label="Producteurs" />
          <MenuLink href={'/adherer'} label="Adhérer" />
        </ul>
      </div>

      <div className="flex items-center">
        <ButtonLink
          href={Routes.ContactPage()}
          variant="outlined"
          className="text-gray-500 border border-gray-700 hover:border-primary-500 hover:text-primary-500"
        >
          Nous contacter
        </ButtonLink>
      </div>
    </nav>
  );
};

export default DesktopMenu;
