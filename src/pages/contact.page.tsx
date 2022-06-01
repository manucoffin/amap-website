import { Banner, H1, Header } from '@src/core/components';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { MainLayout } from 'src/core/layouts';
import { Address, Amap, Contact } from '@cms/models';
import { getAddress, getAmap, getContact } from '@src/cms';
import Image from 'next/image';

const ContactPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ footerData }) => {
  const {
    address: { postcode, city, address },
    amap: { schedule },
    contact: { phone, email },
  } = footerData;

  return (
    <MainLayout
      title="Contact"
      description="Page de contact de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
      className="bg-concrete bg-repeat pb-20"
    >
      <Header amapName={footerData.amap.name} />

      <div className="px-4 py-12 lg:w-2/3 2xl:w-1/2 mx-auto">
        <H1>Envie de discuter ?</H1>

        <div className="flex flex-col items-center text-gray-700 gap-6">
          <Image
            src="/assets/paper-plane.png"
            alt="Dessin d'un avion en papier"
            width={100}
            height={100}
          />

          <div className="relative w-[260px] flex justify-center">
            <Banner className="fill-primary-100 absolute -top-[6px] left-0" />
            <span className="relative font-handwritten text-3xl z-10">
              Laissez nous un petit mot
            </span>
          </div>

          <a href={`mailto:${email}`} className="text-2xl font-bold">
            {email}
          </a>
        </div>

        <div className="flex flex-col items-center text-gray-700 gap-6 mt-20">
          <Image
            src="/assets/contact-us.png"
            alt="Dessin d'un téléphone"
            width={100}
            height={100}
          />

          <div className="relative w-[260px] flex justify-center">
            <Banner className="fill-yellow-500 absolute -top-[6px] left-0" />
            <span className="relative font-handwritten text-3xl z-10">Discutons</span>
          </div>

          <a href={`tel:${phone}`} className="text-2xl font-bold">
            {phone}
          </a>
        </div>
        <div className="flex flex-col items-center text-gray-700 gap-6 mt-20">
          <Image
            src="/assets/map-point.png"
            alt="Dessin d'une carte avec un repère"
            width={100}
            height={100}
          />

          <div className="relative w-[260px] flex justify-center">
            <Banner className="fill-melon-500 absolute -top-[6px] left-0" />
            <span className="relative font-handwritten text-3xl z-10">Venez nous recontrer !</span>
          </div>

          <ul className="text-2xl font-normal text-center">
            <li>{schedule}</li>
            <li className="mt-4">{address}</li>
            <li>
              {postcode}&nbsp;
              {city}
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  footerData: { address: Address; amap: Amap; contact: Contact };
}> = () => {
  const footerData = {
    address: getAddress(),
    amap: getAmap(),
    contact: getContact(),
  };

  return {
    props: { footerData },
  };
};

export default ContactPage;
