import React from 'react';

// components
import Menu from '../../../shared/menu/menu.component';

// styles
import { Container } from './main.styles';

export default function Main() {
  return (
    <Container>
      <Menu />
      <h1>this page is main</h1>
    </Container>
  );
}
