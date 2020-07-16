import React from 'react';

// components
import Button from '../../shared/simple-button/simple-button.component';

// styles
import { Container, TitleItemsContainer, Title } from './list-items.styles';

export default function ListItems(props) {
  return (
    <Container>
      <TitleItemsContainer>
        <Title>
          <label>{props.title}</label>
        </Title>
        <Button title="View More" />
      </TitleItemsContainer>
    </Container>
  );
}
