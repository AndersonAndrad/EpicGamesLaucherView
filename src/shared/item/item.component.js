import React from 'react';

// styles
import {
  Container,
  Items,
  Name,
  NameFree,
  Bussines,
  Discount,
  OldPrice,
  CurrentPrice,
  Image,
  PriceGameContainer,
  FreeText,
  StatusFree,
  InfoGameContainer,
  InitialDate,
} from './item.styles';

export default function Item(props) {
  return props.free ? (
    <Container>
      <Items>
        <Image>
          <img src={props.urlImage} alt="" />
          <StatusFree>
            {props.freeNow ? (
              <FreeText status={props.freeNow}>FREE NOW</FreeText>
            ) : (
              <FreeText status={props.freeNow}>COMING SOON</FreeText>
            )}
          </StatusFree>
        </Image>
        <InfoGameContainer>
          <NameFree>
            <label>{props.name}</label>
          </NameFree>
          <StatusFree>
            {props.freeNow ? <label>Free Now</label> : <label>Free</label>}
            <InitialDate>
              <label>{props.initialDate}</label>
            </InitialDate>
            {props.finalDate ? <label>{props.finalDate}</label> : null}
            {props.finalHours ? <label>{props.finalHours}</label> : null}
          </StatusFree>
        </InfoGameContainer>
      </Items>
    </Container>
  ) : (
    <Container>
      <Items>
        <Image>
          <img src={props.urlImage} alt="" />
        </Image>
        <Name>
          <label>{props.name}</label>
        </Name>
        <Bussines>
          <label>{props.bussines}</label>
        </Bussines>
        <PriceGameContainer>
          {props.discount ? (
            <Discount>
              <label>-{props.discount}%</label>
            </Discount>
          ) : null}
          <OldPrice>
            {props.oldPrice ? <label>R${props.oldPrice}</label> : null}
          </OldPrice>
          <CurrentPrice>
            <label>R${props.currentPrice}</label>
          </CurrentPrice>
        </PriceGameContainer>
      </Items>
    </Container>
  );
}
