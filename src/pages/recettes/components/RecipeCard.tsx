import Image from 'next/image';
import { Recipe } from '@cms/models';
import { Routes } from '@src/core/constants/routes';
import Link from 'next/link';

type Props = React.ComponentPropsWithoutRef<'a'> & {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: Props) => {
  const { photoUrl, title, prepTime, cookTime, yields, slug } = recipe;

  return (
    <Link href={Routes.RecipePage({ slug })} className="flex flex-col gap-4 group">
      <div className="h-[200px] relative rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition">
        <Image src={photoUrl} fill className="object-cover" alt={`Photo de ${title}`} />
      </div>

      <div>
        <h5 className="text-gray-700 text-xl font-bold text-center mb-2">{title}</h5>
        <div className="flex gap-4 text-gray-700">
          <div className="flex items-center gap-1">
            <Image
              src="/assets/restaurant.png"
              width={20}
              height={20}
              alt="Icône d'assiette"
              className="mr-2"
            />

            <span>{yields} pers.</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/assets/hourglass.png" width={18} height={18} alt="Icône de sablier" />

            <span>{prepTime + cookTime} min</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
