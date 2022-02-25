// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7CzphteDn95cERg7nN7EAF
// Component: OWIENifDVhJ
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

import { useScreenVariants as useScreenVariantshaBl5ZeVufY } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: HABl5zeVufY/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_amap_website.module.css"; // plasmic-import: 7CzphteDn95cERg7nN7EAF/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: OWIENifDVhJ/css

import DropIcon from "./icons/PlasmicIcon__Drop"; // plasmic-import: RvQEfXJy0/icon

export type PlasmicFooter__VariantMembers = {
  minimal: "minimal";
};

export type PlasmicFooter__VariantsArgs = {
  minimal?: SingleBooleanChoiceArg<"minimal">;
};

type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>(
  "minimal"
);

export type PlasmicFooter__ArgsType = {
  schedule?: React.ReactNode;
  address?: React.ReactNode;
  postCode?: React.ReactNode;
  city?: React.ReactNode;
};

type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>(
  "schedule",
  "address",
  "postCode",
  "city"
);

export type PlasmicFooter__OverridesType = {
  footer?: p.Flex<"footer">;
  columns?: p.Flex<"div">;
  logo?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  phone?: p.Flex<"div">;
  email?: p.Flex<"div">;
  homeLink?: p.Flex<"a"> & Partial<LinkProps>;
  sitemapLink?: p.Flex<"a"> & Partial<LinkProps>;
  legalLink?: p.Flex<"a"> & Partial<LinkProps>;
  creditsLink?: p.Flex<"a"> & Partial<LinkProps>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultFooterProps {
  schedule?: React.ReactNode;
  address?: React.ReactNode;
  postCode?: React.ReactNode;
  city?: React.ReactNode;
  minimal?: SingleBooleanChoiceArg<"minimal">;
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshaBl5ZeVufY()
  });

  return (
    <footer
      data-plasmic-name={"footer"}
      data-plasmic-override={overrides.footer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.footer,
        { [sty.footerminimal]: hasVariant(variants, "minimal", "minimal") }
      )}
    >
      {(hasVariant(variants, "minimal", "minimal") ? true : true) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          hasGap={true}
          className={classNames(projectcss.all, sty.columns, {
            [sty.columnsminimal]: hasVariant(variants, "minimal", "minimal")
          })}
        >
          <div className={classNames(projectcss.all, sty.column__haRo)}>
            <div
              data-plasmic-name={"logo"}
              data-plasmic-override={overrides.logo}
              className={classNames(projectcss.all, sty.logo)}
            >
              <DropIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />

              <div className={classNames(projectcss.all, sty.freeBox__pT7Tv)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zrsXw
                  )}
                >
                  {"AMAP"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dDwWv
                  )}
                >
                  {"de la"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___4BdA
                  )}
                >
                  {"Goutte d'Eau"}
                </div>
              </div>
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.column__mFf3K)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__pZLrk
              )}
            >
              {"Distribution de Légumes"}
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__jxPc2)}>
              {p.renderPlasmicSlot({
                defaultContents: "Tous les jeudis de 18h à 20h",
                value: args.schedule,
                className: classNames(sty.slotTargetSchedule)
              })}
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__krf4F)}>
              {p.renderPlasmicSlot({
                defaultContents: "26 rue Grandmaison",
                value: args.address,
                className: classNames(sty.slotTargetAddress)
              })}
            </div>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__lqfLt)}>
                {p.renderPlasmicSlot({
                  defaultContents: "49800",
                  value: args.postCode,
                  className: classNames(sty.slotTargetPostCode)
                })}

                <div className={classNames(projectcss.all, sty.freeBox__cdTq1)}>
                  {p.renderPlasmicSlot({
                    defaultContents: " Brain sur l’Authion",
                    value: args.city,
                    className: classNames(sty.slotTargetCity)
                  })}
                </div>
              </div>
            ) : null}
          </div>

          <div className={classNames(projectcss.all, sty.column___4XhX0)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xu6J3
              )}
            >
              {"Envie de discuter ?"}
            </div>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__rdFqS)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__i7PwG
                  )}
                >
                  {"Tel."}
                </div>

                <div
                  data-plasmic-name={"phone"}
                  data-plasmic-override={overrides.phone}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.phone
                  )}
                >
                  {"02 34 56 78 90"}
                </div>
              </div>
            ) : null}

            <div
              data-plasmic-name={"email"}
              data-plasmic-override={overrides.email}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.email
              )}
            >
              {"amap-goutte-eau@mail.fr"}
            </div>
          </div>
        </p.Stack>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___7CGho, {
          [sty.freeBoxminimal___7CGho8Pz46]: hasVariant(
            variants,
            "minimal",
            "minimal"
          )
        })}
      >
        <p.PlasmicLink
          data-plasmic-name={"homeLink"}
          data-plasmic-override={overrides.homeLink}
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.homeLink
          )}
          component={Link}
          href={"/" as const}
          platform={"nextjs"}
        >
          {"Accueil"}
        </p.PlasmicLink>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__bTlzx
          )}
        >
          {"|"}
        </div>

        <p.PlasmicLink
          data-plasmic-name={"sitemapLink"}
          data-plasmic-override={overrides.sitemapLink}
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.sitemapLink
          )}
          component={Link}
          href={"/plan-du-site" as const}
          platform={"nextjs"}
        >
          {"Plan du site"}
        </p.PlasmicLink>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__kiWO
          )}
        >
          {"|"}
        </div>

        <p.PlasmicLink
          data-plasmic-name={"legalLink"}
          data-plasmic-override={overrides.legalLink}
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.legalLink
          )}
          component={Link}
          href={"/mentions-legales" as const}
          platform={"nextjs"}
        >
          {"Mentions légales"}
        </p.PlasmicLink>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__wih21
          )}
        >
          {"|"}
        </div>

        <p.PlasmicLink
          data-plasmic-name={"creditsLink"}
          data-plasmic-override={overrides.creditsLink}
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.creditsLink
          )}
          component={Link}
          href={"/credits" as const}
          platform={"nextjs"}
        >
          {"Crédits"}
        </p.PlasmicLink>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__iyM0M
          )}
        >
          {"|"}
        </div>

        <p.PlasmicLink
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link
          )}
          component={Link}
          href={"https://teide.tech" as const}
          platform={"nextjs"}
          target={"_blank" as const}
        >
          {"© Teide Technologies"}
        </p.PlasmicLink>
      </p.Stack>
    </footer>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  footer: [
    "footer",
    "columns",
    "logo",
    "svg",
    "phone",
    "email",
    "homeLink",
    "sitemapLink",
    "legalLink",
    "creditsLink",
    "link"
  ],
  columns: ["columns", "logo", "svg", "phone", "email"],
  logo: ["logo", "svg"],
  svg: ["svg"],
  phone: ["phone"],
  email: ["email"],
  homeLink: ["homeLink"],
  sitemapLink: ["sitemapLink"],
  legalLink: ["legalLink"],
  creditsLink: ["creditsLink"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  footer: "footer";
  columns: "div";
  logo: "div";
  svg: "svg";
  phone: "div";
  email: "div";
  homeLink: "a";
  sitemapLink: "a";
  legalLink: "a";
  creditsLink: "a";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "footer") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("footer"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    logo: makeNodeComponent("logo"),
    svg: makeNodeComponent("svg"),
    phone: makeNodeComponent("phone"),
    email: makeNodeComponent("email"),
    homeLink: makeNodeComponent("homeLink"),
    sitemapLink: makeNodeComponent("sitemapLink"),
    legalLink: makeNodeComponent("legalLink"),
    creditsLink: makeNodeComponent("creditsLink"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
