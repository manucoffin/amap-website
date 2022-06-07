import { forwardRef } from "react"
import clsx from "clsx"

type Props = React.PropsWithRef<JSX.IntrinsicElements["a"]>

const ExternalLink = forwardRef<HTMLAnchorElement, Props>((props, ref) => (
  <a
    {...props}
    ref={ref}
    className={clsx(
      props.className,
      "text-gray-500 font-light hover:text-primary-500  hover:underline transition cursor-pointer"
    )}
  />
))

ExternalLink.displayName = "ExternalLink"

export default ExternalLink
