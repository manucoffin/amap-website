import clsx from 'clsx';

type Props = React.ComponentPropsWithoutRef<'a'>;

const ExternalLink = (props: Props, ref) => (
  <a
    {...props}
    ref={ref}
    className={clsx(
      props.className,
      'text-gray-500 font-light hover:text-primary-500  hover:underline transition cursor-pointer'
    )}
  />
);

export default ExternalLink;
