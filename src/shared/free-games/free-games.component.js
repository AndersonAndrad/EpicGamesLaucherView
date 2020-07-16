import React from 'react';

// components
import Button from '../../shared/simple-button/simple-button.component';
import Item from '../../shared/item/item.component';

// styles
import {
  Container,
  Title,
  TitleContainer,
  ItemsContainer,
} from './free-games.styles';

// values
// title: String
// titleSize: Number
// titleButton: String
// background: String
// games: Object Array
// id: number
// image: String
// bussines: String
// discount: String
// oldPrice: String
// currentPrice: String

export default function CardGames(props) {
  return (
    <Container background={props.background}>
      <TitleContainer>
        <Title>
          <label size={props.size}>{props.title}</label>
        </Title>
        <Button title={props.titleButton} />
      </TitleContainer>
      <ItemsContainer>
        {props.games ? (
          props.games.map((game) => (
            <li key={game.id}>
              <Item
                free={game.free}
                urlImage={game.image}
                name={game.name}
                bussines={game.bussines}
                discount={game.discount}
                oldPrice={game.oldPrice}
                currentPrice={game.currentPrice}
                freeNow={game.freeNow}
                initialDate={game.initialDate}
                finalDate={game.finalDate}
                finalHours={game.finalHours}
              />
            </li>
          ))
        ) : (
          <label>nothing games</label>
        )}
      </ItemsContainer>
    </Container>
  );
}
