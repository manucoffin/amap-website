import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { XIcon, MenuIcon } from '@heroicons/react/outline';
import { MenuSectionHeading, MenuLink } from '@src/core/components';
import Image from 'next/image';

const MenuItems = () => {
  return (
    <>
      <Menu.Item>
        <MenuLink href={'/actus'} label="Actus" />
      </Menu.Item>

      <>
        <Menu.Item>
          <MenuSectionHeading label="La Goutte d'Eau" />
        </Menu.Item>
        <Menu.Item>
          <MenuLink href={'/contrats'} label="Contrats" />
        </Menu.Item>
        <Menu.Item>
          <MenuLink href={'/producteurs'} label="Producteurs" />
        </Menu.Item>
        <Menu.Item>
          <MenuLink href={'/adherer'} label="Adhérer" />
        </Menu.Item>
      </>

      <hr className="my-4" />

      <Menu.Item>
        <MenuLink href={'/contact'} label="Nous Contacter" />
      </Menu.Item>
    </>
  );
};

const MobileMenu = () => {
  return (
    <Menu as="div" className="inline-block md:hidden">
      {({ open }) => {
        return (
          <>
            <Menu.Button aria-label="Menu" className="flex items-center">
              <MenuIcon className="w-5 h-5 ml-auto" />
            </Menu.Button>

            <Transition
              as={Fragment}
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="fixed inset-0 z-10 flex px-4 overflow-y-scroll origin-top-right bg-white focus:outline-none"
                style={{ flexFlow: 'column nowrap' }}
              >
                <Menu.Item>
                  <span className="flex justify-between items-center py-4 mb-4">
                    <Image
                      src="/logo_h.png"
                      alt="Logo de l'AMAP de la goutte d'eau"
                      height={40}
                      width={200}
                      objectFit="contain"
                    />
                    <span className="w-16">
                      <XIcon className="w-6 h-6 ml-auto" />
                    </span>
                  </span>
                </Menu.Item>

                <MenuItems />
              </Menu.Items>
            </Transition>
          </>
        );
      }}
    </Menu>
  );
};
export default MobileMenu;
