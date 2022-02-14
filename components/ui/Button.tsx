import clsx from "clsx";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  size?: "small" | "medium" | "large";
  loading?: boolean;
}

export const Button = ({
  children,
  loading,
  size = "medium",
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={clsx(
        "w-full block text-center font-medium uppercase text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-300 transition text-sm",
        "disabled:bg-blue-500/75 disabled:cursor-not-allowed",
        {
          "py-1": size === "small",
          "py-2": size === "medium",
          "py-3": size === "large",
        },
        props.className
      )}
      disabled={loading}
    >
      <div className="flex justify-center">
        <svg
          className={clsx(
            loading ? "block" : "hidden",
            "animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
        {children}
      </div>
    </button>
  );
};
