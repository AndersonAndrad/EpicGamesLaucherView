import React from 'react';

// styles
import {
  Container,
  Items,
  Name,
  Bussines,
  Discount,
  OldPrice,
  CurrentPrice,
  Image,
  PriceGameContainer,
} from './item.styles';

export default function Item(props) {
  return (
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
          <Discount>
            <label>-{props.discount}%</label>
          </Discount>
          <OldPrice>
            <label>R${props.oldPrice}</label>
          </OldPrice>
          <CurrentPrice>
            <label>R${props.currentPrice}</label>
          </CurrentPrice>
        </PriceGameContainer>
      </Items>
    </Container>
  );
}
