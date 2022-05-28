import * as React from 'react';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import {
  PlasmicAmapAdvantageBlock,
  DefaultAmapAdvantageBlockProps,
} from '../plasmic/amap_website/PlasmicAmapAdvantageBlock';

function AmapAdvantageBlock_(props: DefaultAmapAdvantageBlockProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicAmapAdvantageBlock root={{ ref }} {...props} />;
}

const AmapAdvantageBlock = React.forwardRef(AmapAdvantageBlock_);
export default AmapAdvantageBlock;
