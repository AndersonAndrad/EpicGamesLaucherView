import React from 'react';

// components
import Menu from '../../../shared/menu/menu.component';
import Item from '../../../shared/item/item.component';
import ListContainer from '../../../shared/list-items/list-items.component';

// styles
import {
  Container,
  Pages,
  SearchContainer,
  TitleContainer,
  CarouselContainer,
  MainContainer,
  ListItemContainer,
  TitleItemsContainer,
  List,
} from './main.styles';
import { MdSearch } from 'react-icons/md';

export default function Main() {
  const link =
    'https://store-images.s-microsoft.com/image/apps.51903.71972716530068101.ccdcadf1-1d2a-49f2-9c37-0b0a27e5a53c.08e06d2d-1104-4c80-b879-91facf8348d5?mode=scale&q=90&h=300&w=200';

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
        <List>
          <ListContainer title="Ubsoft" buttonTitle="View more" />
          <ListItemContainer>
            <Item
              urlImage={link}
              name="Assassin's Creed"
              bussines="Ubsoft"
              discount="65"
              oldPrice="195,00"
              currentPrice="200,00"
            />
            <Item
              urlImage={link}
              name="Assassin's Creed"
              bussines="Ubsoft"
              discount="65"
              oldPrice="195,00"
              currentPrice="200,00"
            />
            <Item
              urlImage={link}
              name="Assassin's Creed"
              bussines="Ubsoft"
              discount="65"
              oldPrice="195,00"
              currentPrice="200,00"
            />
            <Item
              urlImage={link}
              name="Assassin's Creed"
              bussines="Ubsoft"
              discount="65"
              oldPrice="195,00"
              currentPrice="200,00"
            />
            <Item
              urlImage={link}
              name="Assassin's Creed"
              bussines="Ubsoft"
              discount="65"
              oldPrice="195,00"
              currentPrice="200,00"
            />
          </ListItemContainer>
        </List>
      </MainContainer>
    </Container>
  );
}
