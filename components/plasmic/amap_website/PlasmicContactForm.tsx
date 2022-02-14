// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7CzphteDn95cERg7nN7EAF
// Component: tUvxVYleeL
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_amap_website.module.css"; // plasmic-import: 7CzphteDn95cERg7nN7EAF/projectcss
import sty from "./PlasmicContactForm.module.css"; // plasmic-import: tUvxVYleeL/css

export type PlasmicContactForm__VariantMembers = {};

export type PlasmicContactForm__VariantsArgs = {};
type VariantPropType = keyof PlasmicContactForm__VariantsArgs;
export const PlasmicContactForm__VariantProps = new Array<VariantPropType>();

export type PlasmicContactForm__ArgsType = {};
type ArgPropType = keyof PlasmicContactForm__ArgsType;
export const PlasmicContactForm__ArgProps = new Array<ArgPropType>();

export type PlasmicContactForm__OverridesType = {
  root?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultContactFormProps {
  className?: string;
}

function PlasmicContactForm__RenderFunc(props: {
  variants: PlasmicContactForm__VariantsArgs;
  args: PlasmicContactForm__ArgsType;
  overrides: PlasmicContactForm__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.PlasmicImg
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      alt={""}
      className={classNames(
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
      displayHeight={"auto" as const}
      displayMaxHeight={"none" as const}
      displayMaxWidth={"100%" as const}
      displayMinHeight={"0" as const}
      displayMinWidth={"0" as const}
      displayWidth={"auto" as const}
      loading={"lazy" as const}
      src={{
        src: "/plasmic/amap_website/images/screenshot20220214At095617Png.png",
        fullWidth: 1168,
        fullHeight: 596,
        aspectRatio: undefined
      }}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContactForm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContactForm__VariantsArgs;
    args?: PlasmicContactForm__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContactForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicContactForm__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicContactForm__ArgProps,
      internalVariantPropNames: PlasmicContactForm__VariantProps
    });

    return PlasmicContactForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContactForm";
  } else {
    func.displayName = `PlasmicContactForm.${nodeName}`;
  }
  return func;
}

export const PlasmicContactForm = Object.assign(
  // Top-level PlasmicContactForm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicContactForm
    internalVariantProps: PlasmicContactForm__VariantProps,
    internalArgProps: PlasmicContactForm__ArgProps
  }
);

export default PlasmicContactForm;
/* prettier-ignore-end */
