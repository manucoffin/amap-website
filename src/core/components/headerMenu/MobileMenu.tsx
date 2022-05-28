import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon, MailIcon } from '@heroicons/react/outline';
import { SiteLogo } from 'src/core/components';
import { MobileMenuLink } from './MobileMenuLink';

export const MobileMenu = () => {
  return (
    <Menu as="div" className="inline-block md:hidden">
      {({ open }) => {
        return (
          <>
            <Menu.Button aria-label="Menu">
              <MenuIcon className="w-6 h-6 ml-auto text-blue-700" />
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
                className="fixed inset-0 z-10 flex gap-8 px-4 overflow-y-scroll origin-top-right bg-white focus:outline-none"
                style={{ flexFlow: 'column nowrap' }}
              >
                <Menu.Item>
                  <span className="flex justify-between items-center py-4">
                    <SiteLogo></SiteLogo>
                    <span className="w-16">
                      <XIcon className="w-6 h-6 ml-auto text-blue-700" />
                    </span>
                  </span>
                </Menu.Item>

                <Menu.Item>
                  <MobileMenuLink href="/actus" aria-label="Actus">
                    Actus
                  </MobileMenuLink>
                </Menu.Item>

                <Menu.Item>
                  <MobileMenuLink href="/contrats" aria-label="Contrats">
                    Contrats
                  </MobileMenuLink>
                </Menu.Item>

                <Menu.Item>
                  <MobileMenuLink href="/adhesion" aria-label="Adhérer">
                    Adhérer
                  </MobileMenuLink>
                </Menu.Item>

                <Menu.Item>
                  <MobileMenuLink
                    href="/contact"
                    aria-label="Nous contacter"
                    className="inline-flex flex-row items-center py-6 mt-auto text-base font-medium border-t border-gray-300"
                  >
                    <MailIcon className="w-5 h-5 mr-2" /> Nous contacter
                  </MobileMenuLink>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        );
      }}
    </Menu>
  );
};
