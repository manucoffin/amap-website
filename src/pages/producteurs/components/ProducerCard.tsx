import Image from 'next/image';
import { Producer } from '@cms/models';
import { Routes } from '@src/core/constants/routes';
import Link from 'next/link';

type Props = React.ComponentPropsWithoutRef<'a'> & {
  producer: Producer;
};

const ProducerCard = ({ producer }: Props) => {
  const { firstname, lastname, photoUrl, slug } = producer;

  return (
    <Link href={Routes.ProducerPage({ slug })} className="flex flex-col gap-4 group">
      <div className="h-[200px] relative rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition">
        <Image
          src={photoUrl}
          fill
          className="object-cover"
          alt={`Photo de ${firstname} ${lastname}`}
        />
      </div>

      <h5 className="text-gray-700 text-xl font-bold text-center">
        {firstname} {lastname}
      </h5>
    </Link>
  );
};

export default ProducerCard;
