import React from 'react';

// components
import Menu from '../../../shared/menu/menu.component';
import Item from '../../../shared/item/item.component';
import ListContainer from '../../../shared/list-items/list-items.component';
import FreeGames from '../../../shared/free-games/free-games.component';

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
        <FreeGames
          title="Ubsoft "
          titleButton="VIEW MORE"
          games={[
            {
              id: 1,
              image:
                'https://store-images.s-microsoft.com/image/apps.51903.71972716530068101.ccdcadf1-1d2a-49f2-9c37-0b0a27e5a53c.08e06d2d-1104-4c80-b879-91facf8348d5?mode=scale&q=90&h=300&w=200',
              name: "Assassin's Creed",
              bussines: 'Ubsoft',
              discount: '65',
              oldPrice: '195,00',
              currentPrice: '200,00',
            },
          ]}
        />
        <FreeGames
          title="Free Games"
          titleButton="View more"
          background="#2a2a2a"
          games={[
            {
              id: 1,
              image:
                'https://store-images.s-microsoft.com/image/apps.51903.71972716530068101.ccdcadf1-1d2a-49f2-9c37-0b0a27e5a53c.08e06d2d-1104-4c80-b879-91facf8348d5?mode=scale&q=90&h=300&w=200',
              name: "Assassin's Creed",
              bussines: 'Ubsoft',
              discount: '65',
              oldPrice: '195,00',
              currentPrice: '200,00',
            },
            {
              id: 2,
              image:
                'https://store-images.s-microsoft.com/image/apps.51903.71972716530068101.ccdcadf1-1d2a-49f2-9c37-0b0a27e5a53c.08e06d2d-1104-4c80-b879-91facf8348d5?mode=scale&q=90&h=300&w=200',
              name: "Assassin's Creed",
              bussines: 'Ubsoft',
              discount: '65',
              oldPrice: '195,00',
              currentPrice: '200,00',
            },
            {
              id: 3,
              image:
                'https://store-images.s-microsoft.com/image/apps.51903.71972716530068101.ccdcadf1-1d2a-49f2-9c37-0b0a27e5a53c.08e06d2d-1104-4c80-b879-91facf8348d5?mode=scale&q=90&h=300&w=200',
              name: "Assassin's Creed",
              bussines: 'Ubsoft',
              discount: '65',
              oldPrice: '195,00',
              currentPrice: '200,00',
            },
            {
              id: 4,
              image:
                'https://store-images.s-microsoft.com/image/apps.51903.71972716530068101.ccdcadf1-1d2a-49f2-9c37-0b0a27e5a53c.08e06d2d-1104-4c80-b879-91facf8348d5?mode=scale&q=90&h=300&w=200',
              name: "Assassin's Creed",
              bussines: 'Ubsoft',
              discount: '65',
              oldPrice: '195,00',
              currentPrice: '200,00',
            },
            {
              id: 5,
              image:
                'https://store-images.s-microsoft.com/image/apps.51903.71972716530068101.ccdcadf1-1d2a-49f2-9c37-0b0a27e5a53c.08e06d2d-1104-4c80-b879-91facf8348d5?mode=scale&q=90&h=300&w=200',
              name: "Assassin's Creed",
              bussines: 'Ubsoft',
              discount: '65',
              oldPrice: '195,00',
              currentPrice: '200,00',
            },
          ]}
        />
      </MainContainer>
    </Container>
  );
}
