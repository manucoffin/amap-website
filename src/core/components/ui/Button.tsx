import clsx from "clsx"

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  size?: "xs" | "sm" | "md" | "lg"
  loading?: boolean
  loadingText?: string
}

const Button = ({
  children,
  disabled,
  loading,
  loadingText = "Loading...",
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "transition cursor-pointer rounded-lg w-full",
        "disabled:cursor-not-allowed",
        {
          "py-px px-1": size === "xs",
          "py-1 px-2": size === "sm",
          "py-2 px-3": size === "md",
          "py-3 px-4": size === "lg",
        }
      )}
      disabled={disabled || loading}
    >
      <div className="flex justify-center items-center">
        <svg
          className={clsx(
            loading ? "block" : "hidden",
            "animate-spin -ml-1 mr-3 h-5 w-5 text-gray-400"
          )}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>

        {loading ? loadingText : children}
      </div>
    </button>
  )
}

export default Button
