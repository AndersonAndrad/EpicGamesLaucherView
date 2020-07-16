import React from 'react';

// styles
import { ButtonView } from './simple-button.styles';

export default function SimpleButton(props) {
  return (
    <ButtonView>
      <label>{props.title}</label>
    </ButtonView>
  );
}
