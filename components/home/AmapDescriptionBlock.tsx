import * as React from 'react';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import {
  PlasmicAmapDescriptionBlock,
  DefaultAmapDescriptionBlockProps,
} from '../plasmic/amap_website/PlasmicAmapDescriptionBlock';

function AmapDescriptionBlock_(
  props: DefaultAmapDescriptionBlockProps,
  ref: HTMLElementRefOf<'div'>
) {
  return <PlasmicAmapDescriptionBlock root={{ ref }} {...props} />;
}

const AmapDescriptionBlock = React.forwardRef(AmapDescriptionBlock_);
export default AmapDescriptionBlock;
