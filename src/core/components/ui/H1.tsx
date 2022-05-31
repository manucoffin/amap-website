import clsx from 'clsx';

type Props = React.ComponentProps<'h1'>;

const H1 = ({ className, ...props }: Props) => {
  return (
    <h1
      {...props}
      className={clsx(
        'tracking-wide text-center font-handwritten font-heading font-bold text-4xl md:text-5xl mb-12 text-gray-700',
        className
      )}
    />
  );
};

export default H1;
