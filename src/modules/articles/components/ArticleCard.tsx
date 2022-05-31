import Image from 'next/image';
import { Article } from '@core/lib/articles';
import { truncateText } from '@core/lib/utils';
import { Routes } from '@src/core/constants/routes';
import clsx from 'clsx';
import { ButtonLink } from '@src/core/components';

type Props = React.ComponentPropsWithoutRef<'div'> & {
  article: Article;
};

const ArticleCard = ({ article }: Props) => {
  const { thumbnail, title, content, date, slug } = article;

  return (
    <div className="flex flex-col gap-4">
      <div className="h-[200px] relative rounded-lg overflow-hidden">
        <Image src={thumbnail} objectFit="cover" layout="fill" alt={title} />
      </div>

      <div className={clsx('grow flex flex-col text-gray-700 justify-between')}>
        <div>
          <h5 className="text-xl font-bold">{truncateText(title, 60)}</h5>
          <p className="text-sm text-gray-400 mb-4">Publié le {date}</p>
          <p>{truncateText(content, 80)}</p>
        </div>

        <div className="flex w-full justify-end mt-4">
          <ButtonLink
            href={Routes.ArticlePage({ articleId: slug })}
            decoration="underline"
            size="base"
          >
            Lire la suite
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
