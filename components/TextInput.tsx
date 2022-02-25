import * as React from 'react';
import { TextInputRef } from '@plasmicapp/react-web';
import { PlasmicTextInput, DefaultTextInputProps } from './plasmic/amap_website/PlasmicTextInput';

function TextInput_(props: DefaultTextInputProps, ref: TextInputRef) {
  const { plasmicProps } = PlasmicTextInput.useBehavior<DefaultTextInputProps>(props, ref);
  return <PlasmicTextInput {...plasmicProps} />;
}

const TextInput = React.forwardRef(TextInput_);

export default Object.assign(TextInput, {
  __plumeType: 'text-input',
});
