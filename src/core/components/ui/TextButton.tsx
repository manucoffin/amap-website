import clsx from "clsx"
import Button, { ButtonProps } from "./Button"

interface TextButtonProps extends ButtonProps {
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "gray"
}

const TextButton = ({ color = "primary", className, children, ...props }: TextButtonProps) => {
  const buttonConfig = {
    primary: "text-primary-500 hover:text-primary-700 disabled:text-gray-400",
    secondary: "text-secondary-500 hover:text-secondary-700 disabled:text-gray-400",
    success: "text-success-500 hover:text-success-700 disabled:text-gray-400",
    danger: "text-danger-500 hover:text-danger-700 disabled:text-gray-400",
    warning: "text-warning-500 hover:text-warning-700 disabled:text-gray-400",
    info: "text-info-500 hover:text-info-700 disabled:text-gray-400",
    gray: "text-gray-500 hover:text-gray-700 disabled:text-gray-400",
  }

  return (
    <Button {...props} className={clsx(className, buttonConfig[color])}>
      {children}
    </Button>
  )
}

export default TextButton
