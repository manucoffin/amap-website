// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7CzphteDn95cERg7nN7EAF
// Component: QMj3hEcFdK
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
import Header from "../../Header"; // plasmic-import: dTKTvnUQf8/component
import TextInput from "../../TextInput"; // plasmic-import: 4PfogoODGJ2/component

import { useScreenVariants as useScreenVariantshaBl5ZeVufY } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: HABl5zeVufY/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_amap_website.module.css"; // plasmic-import: 7CzphteDn95cERg7nN7EAF/projectcss
import sty from "./PlasmicContracts.module.css"; // plasmic-import: QMj3hEcFdK/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: gdJwUI3W1pr/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: wAr9MNE9ViX/icon

export type PlasmicContracts__VariantMembers = {};

export type PlasmicContracts__VariantsArgs = {};
type VariantPropType = keyof PlasmicContracts__VariantsArgs;
export const PlasmicContracts__VariantProps = new Array<VariantPropType>();

export type PlasmicContracts__ArgsType = {
  contracts?: React.ReactNode;
};

type ArgPropType = keyof PlasmicContracts__ArgsType;
export const PlasmicContracts__ArgProps = new Array<ArgPropType>("contracts");

export type PlasmicContracts__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  h1?: p.Flex<"h1">;
  searchInput?: p.Flex<typeof TextInput>;
};

export interface DefaultContractsProps {}

function PlasmicContracts__RenderFunc(props: {
  variants: PlasmicContracts__VariantsArgs;
  args: PlasmicContracts__ArgsType;
  overrides: PlasmicContracts__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshaBl5ZeVufY()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__lmwJe)}>
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {hasVariant(globalVariants, "screen", "md")
                ? "Contactez nous"
                : "Vous cherchez un contrat ? c'est par là"}
            </h1>

            <div className={classNames(projectcss.all, sty.freeBox__orkhX)}>
              <TextInput
                data-plasmic-name={"searchInput"}
                data-plasmic-override={overrides.searchInput}
                name={"" as const}
                placeholder={"Rechercher un contrat..." as const}
                showStartIcon={true}
              />
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__frs9T)}>
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__l8Oml)}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__iSeip)}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___5XtG3
                      )}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__lvvaf)}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__zBlix)}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__se0Cf)}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__lomGb)}
                    />
                  </React.Fragment>
                ),
                value: args.contracts
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "h1", "searchInput"],
  header: ["header"],
  h1: ["h1"],
  searchInput: ["searchInput"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  h1: "h1";
  searchInput: typeof TextInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContracts__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContracts__VariantsArgs;
    args?: PlasmicContracts__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContracts__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicContracts__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicContracts__ArgProps,
      internalVariantPropNames: PlasmicContracts__VariantProps
    });

    return PlasmicContracts__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContracts";
  } else {
    func.displayName = `PlasmicContracts.${nodeName}`;
  }
  return func;
}

export const PlasmicContracts = Object.assign(
  // Top-level PlasmicContracts renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    h1: makeNodeComponent("h1"),
    searchInput: makeNodeComponent("searchInput"),

    // Metadata about props expected for PlasmicContracts
    internalVariantProps: PlasmicContracts__VariantProps,
    internalArgProps: PlasmicContracts__ArgProps
  }
);

export default PlasmicContracts;
/* prettier-ignore-end */
