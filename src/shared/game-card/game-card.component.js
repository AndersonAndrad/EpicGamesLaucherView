import React from 'react';

// styles
import {
  Container,
  TitleContainer,
  ContentContainer,
  DescriptionTitle,
  InfoContainer,
  TitleInfo,
  Button,
  Image,
} from './game-card.styles';

export default function GameCard(props) {
  return (
    <Container>
      <TitleContainer>
        <label>{props.title}</label>
      </TitleContainer>
      <ContentContainer background={props.background}>
        <InfoContainer>
          <TitleInfo>
            <label>{props.infoTitle}</label>
          </TitleInfo>
          <DescriptionTitle>
            <label>{props.descriptionTitle}</label>
          </DescriptionTitle>
          <Button>
            <label>Learn more</label>
          </Button>
        </InfoContainer>
        <Image>
          <img src={props.img} alt="" />
        </Image>
      </ContentContainer>
    </Container>
  );
}
