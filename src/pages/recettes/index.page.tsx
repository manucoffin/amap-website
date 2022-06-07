import * as React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { MainLayout } from '@core/layouts';
import { Address, Amap, Contact, Recipe } from '@cms/models';
import { getAddress, getAmap, getContact, getRecipes } from '@src/cms';
import { H1, Header } from '@core/components';
import { RecipeCard } from './components';
import { SearchIcon } from '@heroicons/react/outline';
import { useEffect, useRef, useState } from 'react';
import autoAnimate from '@formkit/auto-animate';

const RecipesPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  recipes,
  footerData,
}) => {
  function filterRecipes(recipe: Recipe) {
    return recipe.title.toLowerCase().includes(filter.toLowerCase());
  }

  const [filter, setFilter] = useState('');
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <MainLayout
      title="Recettes"
      description="Des idées de recettes avec les ingrédients de votre panier."
      footerData={footerData}
      className="bg-concrete bg-repeat pb-20"
    >
      <Header amapName={footerData.amap.name} />

      <div className="px-4 py-12 lg:w-2/3 2xl:w-1/2 mx-auto">
        <H1>Des recettes pour les gourmands</H1>

        <div className="relative max-w-[300px] h-10 mx-auto mb-10">
          <input
            className="transition h-full rounded-full appearance-none border border-gray-300 w-full pl-5 pr-9 bg-white text-gray-700 placeholder-gray-400 focus:shadow-xl text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
            type="text"
            placeholder="Rechercher une recette"
            onChange={(e) => setFilter(e.target.value)}
          />
          <SearchIcon className="text-gray-400 w-6 h-6 absolute right-3 top-2" />
        </div>

        <div
          className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-8"
          ref={parent}
        >
          {recipes.filter(filterRecipes).map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  recipes: Recipe[];
  footerData: { address: Address; amap: Amap; contact: Contact };
}> = async () => {
  const recipes = await getRecipes();
  const footerData = {
    address: getAddress(),
    amap: getAmap(),
    contact: getContact(),
  };

  return {
    props: { recipes, footerData },
  };
};

export default RecipesPage;
