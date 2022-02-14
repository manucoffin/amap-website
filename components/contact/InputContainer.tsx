import clsx from 'clsx';

interface Props extends React.ComponentProps<'div'> {
  label: React.ReactNode;
  error?: string;
}

export const InputContainer = ({ label, error, children, ...props }: Props) => {
  return (
    <div {...props} className={clsx('flex flex-col mb-4 space-y-3', props.className)}>
      <label className="flex flex-col space-y-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
        <span>{label}</span>

        {children}
      </label>

      {error ? (
        <span role="alert" className="text-xs text-red-500">
          {error}
        </span>
      ) : null}
    </div>
  );
};
