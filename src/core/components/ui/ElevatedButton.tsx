import Button, { ButtonProps } from "./Button"

interface ElevatedButtonProps extends ButtonProps {
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "gray"
}

const ElevatedButton = ({ color = "primary", children, ...props }: ElevatedButtonProps) => {
  const buttonConfig = {
    primary:
      "text-primary-800 bg-primary-100 hover:bg-primary-200 disabled:bg-primary-50 disabled:text-primary-700/70",
    secondary:
      "text-secondary-800 bg-secondary-100 hover:bg-secondary-200 disabled:bg-secondary-50 disabled:text-secondary-700/70",
    success:
      "text-success-800 bg-success-200 hover:bg-success-300 disabled:bg-success-50 disabled:text-success-700/70",
    danger:
      "text-danger-600 bg-danger-100 hover:bg-danger-200 disabled:bg-danger-50 disabled:text-danger-600/70",
    warning:
      "text-warning-800 bg-warning-100 hover:bg-warning-200 disabled:bg-warning-50 disabled:text-warning-700/70",
    info: "text-info-800 bg-info-100 hover:bg-info-200 disabled:bg-info-50 disabled:text-info-700/70",
    gray: "text-gray-800 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-700/70",
  }

  return (
    <Button {...props} className={buttonConfig[color]}>
      {children}
    </Button>
  )
}

export default ElevatedButton
