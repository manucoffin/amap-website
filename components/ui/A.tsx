import { forwardRef } from "react";
import clsx from "clsx";

type Props = React.PropsWithRef<JSX.IntrinsicElements["a"]>;

export const A = forwardRef<HTMLAnchorElement, Props>((props, ref) => (
  <a
    {...props}
    ref={ref}
    className={clsx(props.className, "font-sans text-blue-700")}
  />
));

A.displayName = "A";
