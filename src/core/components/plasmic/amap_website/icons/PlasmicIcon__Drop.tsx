// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DropIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DropIcon(props: DropIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Calque 1"}
      viewBox={"0 0 163.78 230.7"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M81.35 230.7c-11.88 0-26.24-4.25-38.64-11.47a90 90 0 01-36.4-39.84A66 66 0 010 151a80.25 80.25 0 015.42-27.65c5.83-15.59 16.06-31.71 32.18-50.73C63.32 42.26 79 5.31 79.19 4.94L81.28 0l3.46 4.09a603.49 603.49 0 0141.37 54.14C137 74.51 145.6 89.9 151.72 104c6 13.71 9.75 26.65 11.28 38.45a81.46 81.46 0 01-1.83 32.1c-5.92 21.62-22.57 35.09-35.49 42.58-16.78 9.73-33.86 13.4-43.39 13.59zm1.73-218.36c-5.24 11.24-19.66 40-40.45 64.52C27.22 95 17.07 111 11.59 125.64c-6.92 18.49-6.7 35.16.69 51A83.51 83.51 0 0046 213.54c11.74 6.82 25.25 10.78 36.15 10.56 19.89-.38 63.05-16.29 72.65-51.32 10.4-37.85-13.07-90.36-71.72-160.44z"
        }
      ></path>

      <path
        d={
          "M77 207.9a3.3 3.3 0 010-6.59 65.35 65.35 0 0027-7.6 54.41 54.41 0 0019.29-17.22c6.17-9 9.88-20.31 11-33.55a3.3 3.3 0 016.57.57c-1.26 14.46-5.38 26.85-12.26 36.85a60.94 60.94 0 01-21.74 19.28A70.9 70.9 0 0177 207.9z"
        }
      ></path>
    </svg>
  );
}

export default DropIcon;
/* prettier-ignore-end */
