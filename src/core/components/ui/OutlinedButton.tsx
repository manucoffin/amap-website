import clsx from "clsx"
import Button, { ButtonProps } from "./Button"

interface OutlinedButtonProps extends ButtonProps {
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "gray"
}

const OutlinedButton = ({
  color = "primary",
  className,
  children,
  ...props
}: OutlinedButtonProps) => {
  const buttonConfig = {
    primary:
      "text-primary-500 border border-primary-500 hover:border-primary-700 hover:text-primary-700 disabled:border-gray-300 disabled:text-gray-400",
    secondary:
      "text-secondary-500 border border-secondary-500 hover:border-secondary-700 hover:text-secondary-700 disabled:border-gray-300 disabled:text-gray-400",
    success:
      "text-success-500 border border-success-500 hover:border-success-700 hover:text-success-700 disabled:border-gray-300 disabled:text-gray-400",
    danger:
      "text-danger-500 border border-danger-500 hover:border-danger-700 hover:text-danger-700 disabled:border-gray-300 disabled:text-gray-400",
    warning:
      "text-warning-500 border border-warning-500 hover:border-warning-700 hover:text-warning-700 disabled:border-gray-300 disabled:text-gray-400",
    info: "text-info-500 border border-info-500 hover:border-info-700 hover:text-info-700 disabled:border-gray-300 disabled:text-gray-400",
    gray: "text-gray-500 border border-gray-500 hover:border-gray-700 hover:text-gray-700 disabled:border-gray-300 disabled:text-gray-400",
  }

  return (
    <Button {...props} className={clsx(className, buttonConfig[color])}>
      {children}
    </Button>
  )
}

export default OutlinedButton
