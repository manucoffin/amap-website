import clsx from "clsx"

type Props = React.ComponentProps<"h2">

const H2 = ({ className, ...props }: Props) => {
  return (
    <h2
      {...props}
      className={clsx("text-xl font-semibold font-heading text-gray-800 mb-3 mt-6", className)}
    />
  )
}

export default H2
