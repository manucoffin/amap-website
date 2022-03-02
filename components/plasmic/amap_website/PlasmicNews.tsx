// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7CzphteDn95cERg7nN7EAF
// Component: GklD1g5Wgw
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
import ArticleCard from '../../ArticleCard'; // plasmic-import: 6W6tImoBwf/component

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_amap_website.module.css'; // plasmic-import: 7CzphteDn95cERg7nN7EAF/projectcss
import sty from './PlasmicNews.module.css'; // plasmic-import: GklD1g5Wgw/css

export type PlasmicNews__VariantMembers = {};

export type PlasmicNews__VariantsArgs = {};
type VariantPropType = keyof PlasmicNews__VariantsArgs;
export const PlasmicNews__VariantProps = new Array<VariantPropType>();

export type PlasmicNews__ArgsType = {
  leadArticle?: React.ReactNode;
  articles?: React.ReactNode;
};

type ArgPropType = keyof PlasmicNews__ArgsType;
export const PlasmicNews__ArgProps = new Array<ArgPropType>('leadArticle', 'articles');

export type PlasmicNews__OverridesType = {
  root?: p.Flex<'div'>;
  header?: p.Flex<typeof Header>;
  h1?: p.Flex<'h1'>;
};

export interface DefaultNewsProps {}

function PlasmicNews__RenderFunc(props: {
  variants: PlasmicNews__VariantsArgs;
  args: PlasmicNews__ArgsType;
  overrides: PlasmicNews__OverridesType;

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

          <h1
            data-plasmic-name={'h1'}
            data-plasmic-override={overrides.h1}
            className={classNames(projectcss.all, projectcss.h1, projectcss.__wab_text, sty.h1)}
          >
            {'Actualités'}
          </h1>

          <div className={classNames(projectcss.all, sty.freeBox__hzcTe)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__gZq4J)}>
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <ArticleCard
                      className={classNames('__wab_instance', sty.articleCard__dxnWj)}
                      horizontal={true}
                    />
                  ),

                  value: args.leadArticle,
                })}
              </div>
            ) : null}

            <div className={classNames(projectcss.all, sty.freeBox__hifXe)}>
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <ArticleCard
                      className={classNames('__wab_instance', sty.articleCard__j9SfL)}
                      title={"Titre de l'article Super long lalalala"}
                    />

                    <ArticleCard className={classNames('__wab_instance', sty.articleCard__isWU)} />

                    <ArticleCard className={classNames('__wab_instance', sty.articleCard__vw3Jj)} />

                    <ArticleCard
                      className={classNames('__wab_instance', sty.articleCard___9R33Q)}
                    />

                    <ArticleCard className={classNames('__wab_instance', sty.articleCard__pdq7)} />

                    <ArticleCard className={classNames('__wab_instance', sty.articleCard__hhdj)} />

                    <ArticleCard className={classNames('__wab_instance', sty.articleCard__xEMxz)} />
                  </React.Fragment>
                ),
                value: args.articles,
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ['root', 'header', 'h1'],
  header: ['header'],
  h1: ['h1'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: 'div';
  header: typeof Header;
  h1: 'h1';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNews__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNews__VariantsArgs;
    args?: PlasmicNews__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNews__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNews__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNews__ArgProps,
      internalVariantPropNames: PlasmicNews__VariantProps,
    });

    return PlasmicNews__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicNews';
  } else {
    func.displayName = `PlasmicNews.${nodeName}`;
  }
  return func;
}

export const PlasmicNews = Object.assign(
  // Top-level PlasmicNews renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent('header'),
    h1: makeNodeComponent('h1'),

    // Metadata about props expected for PlasmicNews
    internalVariantProps: PlasmicNews__VariantProps,
    internalArgProps: PlasmicNews__ArgProps,
  }
);

export default PlasmicNews;
/* prettier-ignore-end */
