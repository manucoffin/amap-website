import Image from 'next/image';
import { Contract } from '@core/lib/contracts';
import { Routes } from '@src/core/constants/routes';
import Link from 'next/link';

type Props = React.ComponentPropsWithoutRef<'a'> & {
  contract: Contract;
};

const ContractCard = ({ contract }: Props) => {
  const { slug, title, photoUrl } = contract;

  return (
    <Link href={Routes.ContractPage({ contractId: slug })} passHref>
      <a className="flex flex-col gap-4 group">
        <div className="h-[200px] relative rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition">
          <Image src={photoUrl} objectFit="cover" layout="fill" alt={title} />
        </div>

        <h5 className="text-gray-700 text-xl font-bold text-center">{title}</h5>
      </a>
    </Link>
  );
};

export default ContractCard;
