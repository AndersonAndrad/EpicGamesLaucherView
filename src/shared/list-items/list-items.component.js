import React from 'react';

// styles
import {
  Container,
  TitleItemsContainer,
  Title,
  ButtonView,
} from './list-items.styles';

export default function ListItems(props) {
  return (
    <Container>
      <TitleItemsContainer>
        <Title>
          <label>{props.title}</label>
        </Title>
        <ButtonView>
          <label>{props.buttonTitle}</label>
        </ButtonView>
      </TitleItemsContainer>
    </Container>
  );
}
