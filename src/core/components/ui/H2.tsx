import clsx from 'clsx';

type Props = React.ComponentProps<'h2'>;

const H2 = ({ className, ...props }: Props) => {
  return (
    <h2
      {...props}
      className={clsx(
        'tracking-wide text-center font-handwritten font-heading font-bold text-4xl md:text-5xl mb-12 text-primary-700',
        className
      )}
    />
  );
};

export default H2;
