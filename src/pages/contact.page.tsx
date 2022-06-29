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
    contact: { phone1, phone2, email },
  } = footerData;

  return (
    <MainLayout
      title="Contact"
      description="Page de contact de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
      className="pb-20 bg-repeat bg-concrete"
    >
      <Header amapName={footerData.amap.name} />

      <div className="px-4 py-12 mx-auto lg:w-2/3 2xl:w-1/2">
        <H1>Envie de discuter ?</H1>

        <div className="flex flex-col items-center gap-6 text-gray-700">
          <Image
            src="/assets/paper-plane.png"
            alt="Dessin d'un avion en papier"
            width={100}
            height={100}
          />

          <div className="relative w-[260px] flex justify-center">
            <Banner className="fill-primary-100 absolute -top-[6px] left-0" />
            <span className="relative z-10 text-3xl font-handwritten">
              Laissez nous un petit mot
            </span>
          </div>

          <a href={`mailto:${email}`} className="text-2xl font-bold">
            {email}
          </a>
        </div>

        <div className="flex flex-col items-center gap-6 mt-20 text-gray-700">
          <Image
            src="/assets/contact-us.png"
            alt="Dessin d'un télé1phone1,phone2"
            width={100}
            height={100}
          />

          <div className="relative w-[260px] flex justify-center">
            <Banner className="fill-yellow-500 absolute -top-[6px] left-0" />
            <span className="relative z-10 text-3xl font-handwritten">Discutons</span>
          </div>

          <ul>
            <li>
              <a className="text-2xl font-bold" href={`tel:${phone1.replace(/\s/g, '')}`}>
                {phone1}
              </a>
            </li>
            {phone2 ? (
              <li>
                <a className="text-2xl font-bold" href={`tel:${phone2.replace(/\s/g, '')}`}>
                  {phone2}
                </a>
              </li>
            ) : null}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-6 mt-20 text-gray-700">
          <Image
            src="/assets/map-point.png"
            alt="Dessin d'une carte avec un repère"
            width={100}
            height={100}
          />

          <div className="relative w-[260px] flex justify-center">
            <Banner className="fill-melon-500 absolute -top-[6px] left-0" />
            <span className="relative z-10 text-3xl font-handwritten">Venez nous recontrer !</span>
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
