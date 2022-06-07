import clsx from "clsx"

type LoaderProps = {
  containerClassName?: string
  dotsClassName?: string
}

const Loader = ({ dotsClassName, containerClassName }: LoaderProps) => {
  return (
    <div>
      <div className={clsx("loader-dots block relative w-20 h-5", containerClassName)}>
        <div
          className={clsx("absolute top-0 mt-1 w-3 h-3 rounded-full bg-gray-300", dotsClassName)}
        ></div>
        <div
          className={clsx("absolute top-0 mt-1 w-3 h-3 rounded-full bg-gray-300", dotsClassName)}
        ></div>
        <div
          className={clsx("absolute top-0 mt-1 w-3 h-3 rounded-full bg-gray-300", dotsClassName)}
        ></div>
        <div
          className={clsx("absolute top-0 mt-1 w-3 h-3 rounded-full bg-gray-300", dotsClassName)}
        ></div>
      </div>

      <style jsx>{`
        .loader-dots div {
          animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }
        .loader-dots div:nth-child(1) {
          left: 8px;
          animation: loader-dots1 0.6s infinite;
        }
        .loader-dots div:nth-child(2) {
          left: 8px;
          animation: loader-dots2 0.6s infinite;
        }
        .loader-dots div:nth-child(3) {
          left: 32px;
          animation: loader-dots2 0.6s infinite;
        }
        .loader-dots div:nth-child(4) {
          left: 56px;
          animation: loader-dots3 0.6s infinite;
        }
        @keyframes loader-dots1 {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes loader-dots3 {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(0);
          }
        }
        @keyframes loader-dots2 {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(24px, 0);
          }
        }
      `}</style>
    </div>
  )
}

export default Loader
