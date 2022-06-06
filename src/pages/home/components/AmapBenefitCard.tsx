import { Banner } from '@core/components';
import Image from 'next/image';

interface Props {
  title: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
}

const AmapBenefitCard = ({ title, content, imageUrl, imageAlt }: Props) => {
  return (
    <div className="flex flex-col items-center gap-8 text-gray-600 max-w-[300px]">
      <Image src={imageUrl} width={130} height={130} alt={imageAlt} />
      <div className="relative w-[300px] flex justify-center">
        <Banner className="fill-green-300 absolute -top-[6px] left-0" />
        <span className="relative font-bold font-handwritten text-4xl z-10">{title}</span>
      </div>
      <p className="text-center">{content}</p>
    </div>
  );
};

export default AmapBenefitCard;
