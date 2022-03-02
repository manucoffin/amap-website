// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BannerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BannerIcon(props: BannerIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Calque 1"}
      viewBox={"0 0 213.11 40.61"}
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
          "M196.54 40.32s-37.59-1.51-50.1-1c-24.44 1-66.44-1-93.85 1-9 .66-25.59 0-36.13 0A3.47 3.47 0 0113 36.86c0-4.13-1-13.4-1-17.54a88.75 88.75 0 011-15.54c.34-1.87 1.56-3.46 3.46-3.46 0 0 37.15 1 49.54 1 15 0 46-1 61-1 11 0 24 1 45 0a219.47 219.47 0 0124.54 0c1.9 0 3.05 1.6 3.46 3.46 1 4.54 1 10.54 1 16.54 0 4.82-1 16.54-1 16.54a3.47 3.47 0 01-3.46 3.46zm-187.37-1H.85A.93.93 0 010 38.23c.91-4.66 3.91-13.1 3.84-17.91C3.79 16 .91 8.6 0 4.41a.92.92 0 01.85-1.09h8.32A1 1 0 0110 4.41s-.77 11.64-.77 15.52c0 4.58.77 18.3.77 18.3a1 1 0 01-.83 1.09zm194.77 0h8.31a.93.93 0 00.84-1.09c-.91-4.66-3.92-13.1-3.84-17.91.07-4.35 2.95-11.72 3.84-15.91a.93.93 0 00-.84-1.09h-8.31a1 1 0 00-.83 1.09s.77 11.64.77 15.52c0 4.58-.77 18.3-.77 18.3a1 1 0 00.83 1.09z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BannerIcon;
/* prettier-ignore-end */