import clsx from "clsx";

type Props = React.ComponentProps<"footer">;

export const Footer = ({ ...props }: Props) => {
  return (
    <footer
      {...props}
      className={clsx(
        "bg-blue-700 text-white py-8 px-8 flex xl:justify-center",
        props.className
      )}
    >
      FOOTER
    </footer>
  );
};
