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
import * as React from 'react';

import Head from 'next/head';
import Link, { LinkProps } from 'next/link';

import * as p from '@plasmicapp/react-web';
import * as ph from '@plasmicapp/host';

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
  ensureGlobalVariants,
} from '@plasmicapp/react-web';

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_amap_website.module.css'; // plasmic-import: 7CzphteDn95cERg7nN7EAF/projectcss
import sty from './PlasmicContractCard.module.css'; // plasmic-import: cmMrWuVRF8/css

export type PlasmicContractCard__VariantMembers = {};

export type PlasmicContractCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicContractCard__VariantsArgs;
export const PlasmicContractCard__VariantProps = new Array<VariantPropType>();

export type PlasmicContractCard__ArgsType = {
  title?: React.ReactNode;
};

type ArgPropType = keyof PlasmicContractCard__ArgsType;
export const PlasmicContractCard__ArgProps = new Array<ArgPropType>('title');

export type PlasmicContractCard__OverridesType = {
  root?: p.Flex<'a'> & Partial<LinkProps>;
  image?: p.Flex<'div'>;
};

export interface DefaultContractCardProps {
  title?: React.ReactNode;
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
    <p.PlasmicLink
      data-plasmic-name={'root'}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
      component={Link}
      platform={'nextjs'}
    >
      <div className={classNames(projectcss.all, sty.freeBox__rc7M)}>
        <div
          data-plasmic-name={'image'}
          data-plasmic-override={overrides.image}
          className={classNames(projectcss.all, sty.image)}
        />

        {true ? (
          <p.Stack
            as={'div'}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___9JV3Z)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__gPtl4)}>
              {p.renderPlasmicSlot({
                defaultContents: 'Rillettes de poule et terrine de foie',
                value: args.title,
                className: classNames(sty.slotTargetTitle),
              })}
            </div>
          </p.Stack>
        ) : null}
      </div>
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ['root', 'image'],
  image: ['image'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: 'a';
  image: 'div';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
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
    Omit<NodeOverridesType<T>, ReservedPropsType | VariantPropType | ArgPropType> &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(props: T & StrictProps<T, PropsType>) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicContractCard__ArgProps,
      internalVariantPropNames: PlasmicContractCard__VariantProps,
    });

    return PlasmicContractCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicContractCard';
  } else {
    func.displayName = `PlasmicContractCard.${nodeName}`;
  }
  return func;
}

export const PlasmicContractCard = Object.assign(
  // Top-level PlasmicContractCard renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    image: makeNodeComponent('image'),

    // Metadata about props expected for PlasmicContractCard
    internalVariantProps: PlasmicContractCard__VariantProps,
    internalArgProps: PlasmicContractCard__ArgProps,
  }
);

export default PlasmicContractCard;
/* prettier-ignore-end */