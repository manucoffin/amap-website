import * as React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Image from 'next/image';
import { MainLayout } from '@core/layouts';
import { Address, Amap, Contact, Recipe } from '@cms/models';
import { H1, Header } from '@core/components';
import { getAddress, getAmap, getContact, getRecipe } from '@src/cms';

const RecipePage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  footerData,
  recipe,
}) => {
  const { photoUrl, title, description, yields, cookTime, prepTime, ingredients, instructions } =
    recipe;

  return (
    <MainLayout
      title={`${title}`}
      description={`${description}`}
      footerData={footerData}
      className="bg-concrete bg-repeat pb-20"
    >
      <Header amapName={footerData.amap.name} />

      <div className="px-4 py-12 lg:w-2/3 2xl:w-1/2 mx-auto">
        <H1>{title}</H1>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full basis-1/2">
            <div className="h-[200px] relative rounded-lg overflow-hidden shadow-lg md:w-full md:h-[300px]">
              <Image src={photoUrl} objectFit="cover" layout="fill" alt={`Photo de ${title}}`} />
            </div>

            <div className="flex gap-4 mt-4 text-lg md:text-xl text-gray-700">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/restaurant.png"
                  width={24}
                  height={24}
                  alt="Icône d'assiette"
                  className="mr-2"
                />

                <span>{yields} pers.</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/assets/hourglass.png" width={20} height={20} alt="Icône de sablier" />

                <span>{prepTime} min</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/cooking.png"
                  width={24}
                  height={24}
                  alt="Icône de casserole sur le feu"
                />

                <span>{cookTime} min</span>
              </div>
            </div>

            <h2 className="text-2xl text-primary-700 mt-4 mb-4">Ingrédients</h2>

            <ul className="text-gray-700 list-inside list-disc">
              {ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="basis-1/2">
            <h2 className="text-2xl text-primary-700 mb-4">Instructions</h2>

            <ul className="text-gray-700 list-inside">
              {instructions.map((instruction, index) => (
                <li className="flex flex-col mb-4">
                  <span className="uppercase font-bold">Étape {index + 1}</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  footerData: { address: Address; amap: Amap; contact: Contact };
  recipe: Recipe;
}> = async ({ params }) => {
  const id = params.id as string | undefined;

  if (!id) {
    return { notFound: true };
  }

  const recipe = await getRecipe(id.toLocaleLowerCase());

  const footerData = {
    address: getAddress(),
    amap: getAmap(),
    contact: getContact(),
  };

  return {
    props: { footerData, recipe },
  };
};

export default RecipePage;
