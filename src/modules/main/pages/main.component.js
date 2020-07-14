import React from 'react';

// components
import Menu from '../../../shared/menu/menu.component';

// styles
import {
  Container,
  Pages,
  SearchContainer,
  TitleContainer,
  CarouselContainer,
  MainContainer,
  ItemsContainer,
  Item,
  Image,
  Name,
  Bussines,
  Price,
  Discount,
  OldPrice,
  CurrentPrice,
  ListItemContainer,
  TitleItemsContainer,
  ButtonView,
  Title,
} from './main.styles';
import { MdSearch } from 'react-icons/md';

export default function Main() {
  return (
    <Container>
      <Menu />
      <MainContainer>
        <TitleContainer>
          <Pages>
            <label>Discover</label>
            <label>Browse</label>
          </Pages>
          <SearchContainer>
            <MdSearch size={25} />
            <label>Search</label>
          </SearchContainer>
        </TitleContainer>
        <CarouselContainer></CarouselContainer>
        <ItemsContainer>
          <TitleItemsContainer>
            <Title>
              <label>Ubsoft Forward Sale</label>
            </Title>
            <ButtonView>
              <label>View more</label>
            </ButtonView>
          </TitleItemsContainer>
          <ListItemContainer>
            <Item>
              <Image></Image>
              <Name>
                <label>Assassins's Creed Odyssey</label>
              </Name>
              <Bussines>
                <label>Ubsoft</label>
              </Bussines>
              <Price>
                <Discount>
                  <label>-%60</label>
                </Discount>
                <OldPrice>
                  <label>R$150,00</label>
                </OldPrice>
                <CurrentPrice>
                  <label>R$90,00</label>
                </CurrentPrice>
              </Price>
            </Item>
            <Item>
              <Image></Image>
              <Name>
                <label>Assassins's Creed Odyssey</label>
              </Name>
              <Bussines>
                <label>Ubsoft</label>
              </Bussines>
              <Price>
                <Discount>
                  <label>-%60</label>
                </Discount>
                <OldPrice>
                  <label>R$150,00</label>
                </OldPrice>
                <CurrentPrice>
                  <label>R$90,00</label>
                </CurrentPrice>
              </Price>
            </Item>
            <Item>
              <Image></Image>
              <Name>
                <label>Assassins's Creed Odyssey</label>
              </Name>
              <Bussines>
                <label>Ubsoft</label>
              </Bussines>
              <Price>
                <Discount>
                  <label>-%60</label>
                </Discount>
                <OldPrice>
                  <label>R$150,00</label>
                </OldPrice>
                <CurrentPrice>
                  <label>R$90,00</label>
                </CurrentPrice>
              </Price>
            </Item>
            <Item>
              <Image></Image>
              <Name>
                <label>Assassins's Creed Odyssey</label>
              </Name>
              <Bussines>
                <label>Ubsoft</label>
              </Bussines>
              <Price>
                <Discount>
                  <label>-%60</label>
                </Discount>
                <OldPrice>
                  <label>R$150,00</label>
                </OldPrice>
                <CurrentPrice>
                  <label>R$90,00</label>
                </CurrentPrice>
              </Price>
            </Item>
            <Item>
              <Image></Image>
              <Name>
                <label>Assassins's Creed Odyssey</label>
              </Name>
              <Bussines>
                <label>Ubsoft</label>
              </Bussines>
              <Price>
                <Discount>
                  <label>-%60</label>
                </Discount>
                <OldPrice>
                  <label>R$150,00</label>
                </OldPrice>
                <CurrentPrice>
                  <label>R$90,00</label>
                </CurrentPrice>
              </Price>
            </Item>
          </ListItemContainer>
        </ItemsContainer>
      </MainContainer>
    </Container>
  );
}
