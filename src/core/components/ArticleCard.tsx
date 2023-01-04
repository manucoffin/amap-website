import Image from 'next/image';
import { Article } from '@cms/models';
import { truncateText } from '@core/lib/utils';
import { Routes } from '@src/core/constants/routes';
import clsx from 'clsx';
import { ButtonLink } from '@src/core/components';
import { getLocaleDate } from '@core/lib';

type Props = React.ComponentPropsWithoutRef<'div'> & {
  article: Article;
};

const ArticleCard = ({ article }: Props) => {
  const { photoUrl, title, content, date, slug } = article;

  return (
    <div className="flex flex-col gap-4">
      <div className="h-[200px] relative rounded-lg overflow-hidden shadow-lg">
        <Image src={photoUrl} fill className="object-cover" alt={title} />
      </div>

      <div className={clsx('grow flex flex-col text-gray-700 justify-between')}>
        <div>
          <h5 className="text-xl font-bold">{truncateText(title, 60)}</h5>
          <p className="mb-4 text-sm text-gray-400">Publié le {getLocaleDate(new Date(date))}</p>
          <p>{truncateText(content, 80)}</p>
        </div>

        <div className="flex justify-end w-full mt-4">
          <ButtonLink href={Routes.ArticlePage({ slug })} decoration="underline" size="base">
            Lire la suite
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
