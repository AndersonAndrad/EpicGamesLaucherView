import React from 'react';

// components
import Menu from '../../shared/menu/menu.component';

// styles
import {
  Container,
  AboutGameContainer,
  VideoTrailerContainer,
} from './about-game.styles';

export default function AboutGame() {
  return (
    <Container>
      <Menu />
      <AboutGameContainer>
        <VideoTrailerContainer></VideoTrailerContainer>
        <h1>this page about game</h1>
      </AboutGameContainer>
    </Container>
  );
}
