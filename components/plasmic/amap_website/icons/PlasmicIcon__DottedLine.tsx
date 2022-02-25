// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DottedLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DottedLineIcon(props: DottedLineIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Calque 1"}
      viewBox={"0 0 407.03 97.05"}
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
          "M7 4.77c0 .28-.11.79-.17 1.23s-.11.9-.14 1.35q-.11 1.38-.09 2.76a2.49 2.49 0 01-5 .09c0-1.08 0-2.15.09-3.24 0-.54.1-1.08.17-1.63s.15-1 .3-1.74a2.5 2.5 0 014.9 1.09zm5 23.1a42.77 42.77 0 007.39 8.69 2.44 2.44 0 11-3.28 3.62 47.6 47.6 0 01-8.26-9.67A2.46 2.46 0 1112 27.86zm23.72 19.19a101 101 0 0011 4.29 2.4 2.4 0 11-1.48 4.56 104.75 104.75 0 01-11.55-4.48 2.41 2.41 0 012-4.38zM66 56.13l11.83 1.78h.14a2.35 2.35 0 01-.69 4.64l-12.14-1.77a2.36 2.36 0 01.69-4.67zm31.75 3.41l12 .34h.08a2.3 2.3 0 11-.13 4.59l-12.18-.3a2.32 2.32 0 11.12-4.63h.09zm32.09.06l12-.59h.06a2.25 2.25 0 01.22 4.49l-12.12.63a2.27 2.27 0 11-.23-4.53h.06zm32.08-2.15l12-1.24a2.2 2.2 0 01.46 4.38l-12.07 1.27a2.22 2.22 0 11-.46-4.41zM194 54.16L206.1 53a2.15 2.15 0 11.41 4.28l-12 1.19a2.17 2.17 0 11-.42-4.32zm32.23-2.9l12.09-.93a2.1 2.1 0 11.33 4.19l-12.06 1a2.12 2.12 0 11-.34-4.23zM258.5 49l12.12-.62a2.05 2.05 0 01.21 4.1l-12.07.66a2.07 2.07 0 11-.23-4.14zm32.34-1.29l12.16-.14a2 2 0 010 4l-12.07.18a2 2 0 01-.06-4zm32.41.22l12.16.69a2 2 0 01-.22 3.91h-.07l-12-.65H323a2 2 0 11.21-3.94zM355.62 51c4 .67 8 1.47 12 2.49a1.91 1.91 0 01-.94 3.7c-3.85-1-7.76-1.74-11.7-2.39a1.93 1.93 0 11.62-3.8zm31.28 9.88a40.79 40.79 0 019.94 7.8 1.86 1.86 0 11-2.74 2.51 37.51 37.51 0 00-9.07-7 1.88 1.88 0 011.86-3.27zm18.53 26.96a51.65 51.65 0 01.42 6.2 1.82 1.82 0 01-3.64 0 50 50 0 00-.4-5.76 1.83 1.83 0 113.62-.49z"
        }
      ></path>
    </svg>
  );
}

export default DottedLineIcon;
/* prettier-ignore-end */
