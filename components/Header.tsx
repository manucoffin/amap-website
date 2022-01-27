import clsx from "clsx";

type Props = React.PropsWithoutRef<JSX.IntrinsicElements["nav"]>;

export const Header = ({ ...props }: Props) => {
  return (
    <>
      <nav
        {...props}
        className={clsx(
          props.className,
          "font-sans font-semibold h-[100px] max-w-screen-2xl mx-auto w-full z-20"
        )}
      >
        HEADER
      </nav>
    </>
  );
};
