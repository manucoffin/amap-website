import { ChevronDownIcon } from '@heroicons/react/outline';
import { ButtonLink, MenuLink } from '@src/core/components';
import { Routes } from '@src/core/constants/routes';

type Props = React.ComponentPropsWithoutRef<'nav'> & { amapName: string };

const DesktopMenu = ({ amapName, ...props }: Props) => {
  return (
    <nav {...props} className="hidden md:flex text-gray-700">
      <MenuLink href={Routes.NewsPage()} label="Actus" />
      <div className="group inline-block relative">
        <button className=" flex items-center p-4 justify-start hover:text-primary-700 transition">
          <span className="mr-2">{amapName}</span>
          <ChevronDownIcon className="w-4" />
        </button>

        <ul className="absolute hidden group-hover:block z-10 bg-white rounded-md min-w-[200px] shadow-lg">
          <MenuLink href={Routes.ContractsPage()} label="Contrats" />
          <MenuLink href={Routes.ProducersPage()} label="Producteurs" />
          <MenuLink href={Routes.MembershipPage()} label="Adhérer" />
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
