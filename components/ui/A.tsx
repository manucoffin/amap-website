import { forwardRef } from "react";
import clsx from "clsx";

type Props = React.PropsWithRef<JSX.IntrinsicElements["a"]>;

export const A = forwardRef<HTMLAnchorElement, Props>((props, ref) => (
  <a
    {...props}
    ref={ref}
    className={clsx(
      props.className,
      "text-gray-500 hover:text-blue-500 underline-offset-4 hover:underline transition cursor-pointer"
    )}
  />
));

A.displayName = "A";
