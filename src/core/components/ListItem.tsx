import * as React from 'react';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import { PlasmicListItem, DefaultListItemProps } from './plasmic/amap_website/PlasmicListItem';

function ListItem_(props: DefaultListItemProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicListItem root={{ ref }} {...props} />;
}

const ListItem = React.forwardRef(ListItem_);
export default ListItem;
