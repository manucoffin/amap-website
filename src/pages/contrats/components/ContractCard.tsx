import Image from 'next/image';
import { Contract } from '@cms';
import { Routes } from '@src/core/constants/routes';
import Link from 'next/link';

type Props = React.ComponentPropsWithoutRef<'a'> & {
  contract: Contract;
};

const ContractCard = ({ contract }: Props) => {
  const { slug, title, photoUrl } = contract;

  return (
    <Link className="flex flex-col gap-4 group" href={Routes.ContractPage({ contractId: slug })}>
      <div className="h-[200px] relative rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition">
        <Image src={photoUrl} fill className="object-cover" alt={title} />
      </div>

      <h5 className="text-gray-700 text-xl font-bold text-center">{title}</h5>
    </Link>
  );
};

export default ContractCard;
