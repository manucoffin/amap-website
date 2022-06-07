import { Brush } from '@core/components';
import { CheckIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import Fade from 'react-reveal/Fade';

interface Props {
  title: string;
  items: string[];
  color: 'primary' | 'yellow' | 'melon' | 'green';
}

const AmapValueCard = ({ title, items, color }: Props) => {
  const colorConfig = {
    'fill-primary-200': color === 'primary',
    'fill-yellow-500': color === 'yellow',
    'fill-green-300': color === 'green',
    'fill-melon-500': color === 'melon',
  };
  return (
    <div className="flex flex-col items-center gap-8 text-gray-600 max-w-[250px]">
      <div className="relative w-[250px] flex justify-center">
        <Brush className={clsx('w-[150px] absolute left-[50px]', colorConfig)} />
        <span className="relative font-bold font-handwritten text-4xl z-10">{title}</span>
      </div>
      <Fade cascade>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="mb-4 flex items-start">
              <CheckIcon className="w-6 mr-2 shrink-0 text-green-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Fade>
    </div>
  );
};

export default AmapValueCard;
