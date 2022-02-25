import * as React from 'react';
import Image from 'next/image';
import {
  PlasmicContractCard,
  DefaultContractCardProps,
} from './plasmic/amap_website/PlasmicContractCard';

export interface ContractCardProps extends DefaultContractCardProps {
  title: string;
  slug: string;
  imageUrl: string;
}

function ContractCard_({ title, imageUrl, slug, ...props }: ContractCardProps) {
  return (
    <PlasmicContractCard
      {...props}
      href={`/contrats/${slug}`}
      title={title}
      image={{
        render: () => (
          <Image
            src={imageUrl}
            alt={`Photo de ${title}`}
            width={120}
            height={120}
            className="rounded-full"
          />
        ),
      }}
    />
  );
}

const ContractCard = React.forwardRef(ContractCard_);
export default ContractCard;
