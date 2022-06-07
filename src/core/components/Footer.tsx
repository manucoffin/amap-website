import Image from 'next/image';
import * as React from 'react';
import { Address, Amap, Contact } from '@cms/models';
import { ButtonLink } from '@core/components';
import { Routes } from '@core/constants/routes';

type Props = {
  data: { address: Address; amap: Amap; contact: Contact };
  variant: 'minimal' | 'full';
};

const Footer = ({ data }: Props) => {
  const {
    address: { postcode, city, address },
    amap: { schedule },
    contact: { phone, email },
  } = data;

  return (
    <footer className="text-gray-700 bg-fabric bg-blend-multiply bg-primary-300/25 lg:grid lg:grid-cols-7">
      <aside className="hidden lg:relative lg:col-span-2 lg:block">
        <Image
          src="/logo_v.png"
          alt="Logo de l'AMAP de la Goutte d'Eau"
          layout="fill"
          objectFit="contain"
        />
      </aside>

      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:col-span-5">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-5">
          <div className="col-span-2">
            <div className="font-medium">
              <span className="text-xs tracking-widest uppercase">Envie de nous contacter ?</span>

              <a className="block text-xl sm:text-2xl hover:opacity-75" href={`tel:${phone}`}>
                {phone}
              </a>

              <div className="text-xs tracking-widest uppercase mt-4">Ou</div>
              <a className="block text-xl sm:text-2xl hover:opacity-75" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 col-span-3">
            <div>
              <p className="font-bold text-primary-900">Distribution de légumes</p>

              <ul className="mt-4 space-y-2 text-sm">
                <li>{schedule}</li>
                <li>{address}</li>
                <li>
                  {postcode}&nbsp;
                  {city}
                </li>
              </ul>
            </div>

            <div className="mt-4 sm:mt-0">
              <p className="font-bold text-primary-900">Liens utiles</p>

              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-700">
                <ButtonLink
                  href={Routes.RecipesPage()}
                  size="base"
                  className="text-gray-700 hover:text-primary-600"
                >
                  Recettes
                </ButtonLink>
                <ButtonLink
                  href={Routes.PrivacyPolicyPage()}
                  size="base"
                  className="text-gray-700 hover:text-primary-600"
                >
                  Calendrier de distribution
                </ButtonLink>
                <ButtonLink
                  href={Routes.ConventionPage()}
                  size="base"
                  className="text-gray-700 hover:text-primary-600"
                >
                  Charte de l&apos;AMAP
                </ButtonLink>
                <ButtonLink
                  href={Routes.StatutesPage()}
                  size="base"
                  className="text-gray-700 hover:text-primary-600"
                >
                  Statuts de l&apos;association
                </ButtonLink>
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-gray-800">
          <div className="text-sm text-gray-700 sm:items-center sm:justify-between sm:flex">
            <div className="flex space-x-3">
              <ButtonLink
                href={Routes.PrivacyPolicyPage()}
                size="base"
                className="text-gray-700 hover:text-primary-600"
              >
                Politique de confidentialité
              </ButtonLink>
              <ButtonLink
                href={Routes.LegalMentionsPage()}
                size="base"
                className="text-gray-700 hover:text-primary-600"
              >
                Mentions légales
              </ButtonLink>
              <ButtonLink
                href={Routes.SiteMap()}
                size="base"
                className="text-gray-700 hover:text-primary-600"
              >
                Plan du site
              </ButtonLink>
            </div>

            <p className="mt-4 sm:mt-0">&copy; {new Date().getFullYear()} Manuel Coffin</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
