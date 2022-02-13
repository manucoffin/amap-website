// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StadiumsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StadiumsvgIcon(props: StadiumsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Calque 1"}
      viewBox={"0 0 150 50"}
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

      <rect width={"150"} height={"50"} rx={"25"} fill={"currentColor"}></rect>
    </svg>
  );
}

export default StadiumsvgIcon;
/* prettier-ignore-end */
