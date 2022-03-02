// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7CzphteDn95cERg7nN7EAF
// Component: iLdRLFQVaF
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
import Header from '../../Header'; // plasmic-import: dTKTvnUQf8/component

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_amap_website.module.css'; // plasmic-import: 7CzphteDn95cERg7nN7EAF/projectcss
import sty from './PlasmicPrivacyPolicy.module.css'; // plasmic-import: iLdRLFQVaF/css

export type PlasmicPrivacyPolicy__VariantMembers = {};

export type PlasmicPrivacyPolicy__VariantsArgs = {};
type VariantPropType = keyof PlasmicPrivacyPolicy__VariantsArgs;
export const PlasmicPrivacyPolicy__VariantProps = new Array<VariantPropType>();

export type PlasmicPrivacyPolicy__ArgsType = {};
type ArgPropType = keyof PlasmicPrivacyPolicy__ArgsType;
export const PlasmicPrivacyPolicy__ArgProps = new Array<ArgPropType>();

export type PlasmicPrivacyPolicy__OverridesType = {
  root?: p.Flex<'div'>;
  header?: p.Flex<typeof Header>;
  freeBox?: p.Flex<'div'>;
  h1?: p.Flex<'h1'>;
  content?: p.Flex<'div'>;
};

export interface DefaultPrivacyPolicyProps {}

function PlasmicPrivacyPolicy__RenderFunc(props: {
  variants: PlasmicPrivacyPolicy__VariantsArgs;
  args: PlasmicPrivacyPolicy__ArgsType;
  overrides: PlasmicPrivacyPolicy__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

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
          data-plasmic-name={'root'}
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
            data-plasmic-name={'header'}
            data-plasmic-override={overrides.header}
            className={classNames('__wab_instance', sty.header)}
          />

          <div
            data-plasmic-name={'freeBox'}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <h1
              data-plasmic-name={'h1'}
              data-plasmic-override={overrides.h1}
              className={classNames(projectcss.all, projectcss.h1, projectcss.__wab_text, sty.h1)}
            >
              {'Politique de confidentialité'}
            </h1>

            <div
              data-plasmic-name={'content'}
              data-plasmic-override={overrides.content}
              className={classNames(projectcss.all, projectcss.__wab_text, sty.content)}
            >
              {'Enter some text'}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ['root', 'header', 'freeBox', 'h1', 'content'],
  header: ['header'],
  freeBox: ['freeBox', 'h1', 'content'],
  h1: ['h1'],
  content: ['content'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: 'div';
  header: typeof Header;
  freeBox: 'div';
  h1: 'h1';
  content: 'div';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPrivacyPolicy__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPrivacyPolicy__VariantsArgs;
    args?: PlasmicPrivacyPolicy__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPrivacyPolicy__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPrivacyPolicy__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPrivacyPolicy__ArgProps,
      internalVariantPropNames: PlasmicPrivacyPolicy__VariantProps,
    });

    return PlasmicPrivacyPolicy__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicPrivacyPolicy';
  } else {
    func.displayName = `PlasmicPrivacyPolicy.${nodeName}`;
  }
  return func;
}

export const PlasmicPrivacyPolicy = Object.assign(
  // Top-level PlasmicPrivacyPolicy renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent('header'),
    freeBox: makeNodeComponent('freeBox'),
    h1: makeNodeComponent('h1'),
    content: makeNodeComponent('content'),

    // Metadata about props expected for PlasmicPrivacyPolicy
    internalVariantProps: PlasmicPrivacyPolicy__VariantProps,
    internalArgProps: PlasmicPrivacyPolicy__ArgProps,
  }
);

export default PlasmicPrivacyPolicy;
/* prettier-ignore-end */