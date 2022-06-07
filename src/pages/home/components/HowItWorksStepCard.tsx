import clsx from 'clsx';

interface Props {
  step: number;
  title: string;
  content: string;
  color: 'primary' | 'yellow' | 'melon';
}

const HowItWorksStepCard = ({ step, title, content, color }: Props) => {
  const colorConfig = {
    'border-primary-500 text-primary-500': color === 'primary',
    'border-yellow-500 text-yellow-500': color === 'yellow',
    'border-melon-500 text-melon-500': color === 'melon',
  };

  return (
    <div className="flex flex-col items-center gap-6 text-gray-600 max-w-[300px]">
      <div
        className={clsx(
          'w-20 h-20 flex justify-center items-center rounded-full border-[3px] font-bold text-4xl',
          colorConfig
        )}
      >
        {step}
      </div>
      <h5 className={clsx('font-bold text-2xl', colorConfig)}>{title}</h5>
      <p className="text-center">{content}</p>
    </div>
  );
};

export default HowItWorksStepCard;
