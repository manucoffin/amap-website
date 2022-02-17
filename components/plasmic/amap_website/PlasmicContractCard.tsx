// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7CzphteDn95cERg7nN7EAF
// Component: cmMrWuVRF8
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
import sty from "./PlasmicContractCard.module.css"; // plasmic-import: cmMrWuVRF8/css

import InfoIcon from "./icons/PlasmicIcon__Info"; // plasmic-import: ZMjzg7GYb/icon
import DownloadDocumentIcon from "./icons/PlasmicIcon__DownloadDocument"; // plasmic-import: ytp-msYPk/icon

export type PlasmicContractCard__VariantMembers = {};

export type PlasmicContractCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicContractCard__VariantsArgs;
export const PlasmicContractCard__VariantProps = new Array<VariantPropType>();

export type PlasmicContractCard__ArgsType = {
  title?: React.ReactNode;
  icon?: React.ReactNode;
};

type ArgPropType = keyof PlasmicContractCard__ArgsType;
export const PlasmicContractCard__ArgProps = new Array<ArgPropType>(
  "title",
  "icon"
);

export type PlasmicContractCard__OverridesType = {
  root?: p.Flex<"div">;
  infosButton?: p.Flex<"button">;
  downloadButton?: p.Flex<"div">;
};

export interface DefaultContractCardProps {
  title?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

function PlasmicContractCard__RenderFunc(props: {
  variants: PlasmicContractCard__VariantsArgs;
  args: PlasmicContractCard__ArgsType;
  overrides: PlasmicContractCard__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___9JV3Z)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__ltySs)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"40%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/amap_website/images/chickensvg.svg",
                  fullWidth: 162,
                  fullHeight: 150,
                  aspectRatio: 1.077991
                }}
              />
            ),

            value: args.icon
          })}

          <div className={classNames(projectcss.all, sty.freeBox__gPtl4)}>
            {p.renderPlasmicSlot({
              defaultContents: "Rillettes de poule et terrine de foie",
              value: args.title,
              className: classNames(sty.slotTargetTitle)
            })}
          </div>
        </p.Stack>
      ) : null}
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__tFmn)}>
          {true ? (
            <p.Stack
              as={"button"}
              data-plasmic-name={"infosButton"}
              data-plasmic-override={overrides.infosButton}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.button,
                sty.infosButton
              )}
            >
              <InfoIcon
                className={classNames(projectcss.all, sty.svg__cd4R)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9DmSe
                )}
              >
                {"Infos"}
              </div>
            </p.Stack>
          ) : null}
          {true ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"downloadButton"}
              data-plasmic-override={overrides.downloadButton}
              hasGap={true}
              className={classNames(projectcss.all, sty.downloadButton)}
            >
              <DownloadDocumentIcon
                className={classNames(projectcss.all, sty.svg__kLx5A)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rvxla
                )}
              >
                {"Télécharger"}
              </div>
            </p.Stack>
          ) : null}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "infosButton", "downloadButton"],
  infosButton: ["infosButton"],
  downloadButton: ["downloadButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  infosButton: "button";
  downloadButton: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContractCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContractCard__VariantsArgs;
    args?: PlasmicContractCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContractCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicContractCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicContractCard__ArgProps,
      internalVariantPropNames: PlasmicContractCard__VariantProps
    });

    return PlasmicContractCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContractCard";
  } else {
    func.displayName = `PlasmicContractCard.${nodeName}`;
  }
  return func;
}

export const PlasmicContractCard = Object.assign(
  // Top-level PlasmicContractCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    infosButton: makeNodeComponent("infosButton"),
    downloadButton: makeNodeComponent("downloadButton"),

    // Metadata about props expected for PlasmicContractCard
    internalVariantProps: PlasmicContractCard__VariantProps,
    internalArgProps: PlasmicContractCard__ArgProps
  }
);

export default PlasmicContractCard;
/* prettier-ignore-end */
