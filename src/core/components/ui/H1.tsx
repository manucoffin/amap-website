import clsx from "clsx"

type Props = React.ComponentProps<"h1">

const H1 = ({ className, ...props }: Props) => {
  return (
    <h1
      {...props}
      className={clsx("text-2xl font-bold font-heading text-gray-800 mb-10", className)}
    />
  )
}

export default H1
