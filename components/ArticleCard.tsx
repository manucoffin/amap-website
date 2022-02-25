import * as React from 'react';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import {
  PlasmicArticleCard,
  DefaultArticleCardProps,
} from './plasmic/amap_website/PlasmicArticleCard';

export interface ArticleCardProps extends DefaultArticleCardProps {
  thumbnailUrl: string;
  slug: string;
}

function ArticleCard_(
  { thumbnailUrl, slug, horizontal, ...props }: ArticleCardProps,
  ref: HTMLElementRefOf<'div'>
) {
  return (
    <PlasmicArticleCard
      horizontal={horizontal}
      root={{ ref }}
      {...props}
      thumbnail={{
        render: (props) => (
          <div
            className={clsx('w-full relative', {
              'h-[300px] md:h-full': horizontal,
              'h-[200px]': !horizontal,
            })}
          >
            <Image
              src={thumbnailUrl}
              alt={`Photo de ${props.title}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ),
      }}
      goToDetailLink={{
        render: (props, Component) => (
          <Link href={`/actus/${slug}`} passHref>
            <Component {...props}></Component>
          </Link>
        ),
      }}
    />
  );
}

const ArticleCard = React.forwardRef(ArticleCard_);
export default ArticleCard;
