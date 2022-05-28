// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WaterDropFatIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WaterDropFatIcon(props: WaterDropFatIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Calque 1"}
      viewBox={"0 0 172.78 243.69"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M85.85 239.19c-11.88 0-26.24-4.25-38.64-11.47a89.91 89.91 0 01-36.4-39.83 66 66 0 01-6.31-28.4 80.3 80.3 0 015.42-27.66C15.75 116.25 26 100.13 42.1 81.1c25.72-30.35 41.44-67.3 41.59-67.66l2.09-4.94 3.46 4.08a605 605 0 0141.37 54.15C141.49 83 150.1 98.4 156.22 112.47c6 13.71 9.75 26.64 11.28 38.44a81.52 81.52 0 01-1.83 32.09c-5.92 21.61-22.57 35.08-35.49 42.58-16.78 9.73-33.86 13.4-43.39 13.58zm1.73-218.35c-5.24 11.23-19.66 40-40.45 64.52-15.41 18.18-25.56 34.13-31 48.78-6.92 18.49-6.7 35.16.69 51A83.4 83.4 0 0050.52 222c11.74 6.83 25.25 10.78 36.15 10.57 19.89-.39 63.05-16.29 72.65-51.32 10.38-37.82-13.09-90.34-71.74-160.41z"
        }
        strokeWidth={"9"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={
          "M81.5 216.39a3.29 3.29 0 010-6.58h0a65.27 65.27 0 0027-7.61 54.32 54.32 0 0019.28-17.2c6.17-9 9.88-20.3 11-33.54a3.3 3.3 0 016.57.57c-1.26 14.45-5.38 26.85-12.26 36.84a61 61 0 01-21.74 19.29 70.8 70.8 0 01-29.84 8.25z"
        }
        fill={"none"}
        strokeWidth={"7"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default WaterDropFatIcon;
/* prettier-ignore-end */
