import React from 'react';

// components
import Menu from '../../../shared/menu/menu.component';
import FreeGames from '../../../shared/free-games/free-games.component';
import GameCard from '../../../shared/game-card/game-card.component';

// styles
import {
  Container,
  Pages,
  SearchContainer,
  TitleContainer,
  CarouselContainer,
  MainContainer,
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
              free: false,
              freeNow: true,
              finalDate: '',
              initialDate: 'Jul 23 at ',
              finalHours: '12:00 PM',
              image:
                'https://store-images.s-microsoft.com/image/apps.51903.71972716530068101.ccdcadf1-1d2a-49f2-9c37-0b0a27e5a53c.08e06d2d-1104-4c80-b879-91facf8348d5?mode=scale&q=90&h=300&w=200',
              name: "Assassin's Creed",
              bussines: 'Ubsoft',
              discount: '50',
              oldPrice: '100,00',
              currentPrice: '200,00',
            },
            {
              id: 1,
              free: false,
              freeNow: false,
              finalDate: 'Jul 30',
              initialDate: 'Jul 23 - ',
              finalHours: '',
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
              free: true,
              freeNow: true,
              finalDate: '',
              initialDate: 'Jul 23 - ',
              finalHours: '00:00hrs',
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
              free: true,
              freeNow: true,
              finalDate: '',
              initialDate: 'Jul 23 - ',
              finalHours: '00:00hrs',
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
              free: true,
              freeNow: false,
              finalDate: 'Jul 30',
              initialDate: 'Jul 23 - ',
              finalHours: '',
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
              free: true,
              freeNow: false,
              finalDate: 'Jul 30',
              initialDate: 'Jul 23 - ',
              finalHours: '',
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
              free: true,
              freeNow: false,
              finalDate: 'Jul 30',
              initialDate: 'Jul 23 - ',
              finalHours: '',
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
          title="New Releases"
          titleButton=""
          background=""
          games={[
            {
              id: 1,
              free: false,
              freeNow: true,
              finalDate: '',
              initialDate: '',
              finalHours: '',
              image:
                'https://store-images.s-microsoft.com/image/apps.51903.71972716530068101.ccdcadf1-1d2a-49f2-9c37-0b0a27e5a53c.08e06d2d-1104-4c80-b879-91facf8348d5?mode=scale&q=90&h=300&w=200',
              name: "Assassin's Creed",
              bussines: 'Ubsoft',
              discount: '40',
              oldPrice: '39,90',
              currentPrice: '239,00',
            },
            {
              id: 2,
              free: false,
              freeNow: true,
              finalDate: '',
              initialDate: 'Jul 23 - ',
              finalHours: '00:00hrs',
              image:
                'https://store-images.s-microsoft.com/image/apps.51903.71972716530068101.ccdcadf1-1d2a-49f2-9c37-0b0a27e5a53c.08e06d2d-1104-4c80-b879-91facf8348d5?mode=scale&q=90&h=300&w=200',
              name: "Assassin's Creed",
              bussines: 'Ubsoft',
              discount: '',
              oldPrice: '',
              currentPrice: '200,00',
            },
            {
              id: 3,
              free: false,
              freeNow: false,
              finalDate: 'Jul 30',
              initialDate: 'Jul 23 - ',
              finalHours: '',
              image:
                'https://store-images.s-microsoft.com/image/apps.51903.71972716530068101.ccdcadf1-1d2a-49f2-9c37-0b0a27e5a53c.08e06d2d-1104-4c80-b879-91facf8348d5?mode=scale&q=90&h=300&w=200',
              name: "Assassin's Creed",
              bussines: 'Ubsoft',
              discount: '',
              oldPrice: '',
              currentPrice: '200,00',
            },
            {
              id: 4,
              free: false,
              freeNow: false,
              finalDate: 'Jul 30',
              initialDate: 'Jul 23 - ',
              finalHours: '',
              image:
                'https://store-images.s-microsoft.com/image/apps.51903.71972716530068101.ccdcadf1-1d2a-49f2-9c37-0b0a27e5a53c.08e06d2d-1104-4c80-b879-91facf8348d5?mode=scale&q=90&h=300&w=200',
              name: "Assassin's Creed",
              bussines: 'Ubsoft',
              discount: '',
              oldPrice: '',
              currentPrice: '200,00',
            },
            {
              id: 5,
              free: false,
              freeNow: false,
              finalDate: 'Jul 30',
              initialDate: 'Jul 23 - ',
              finalHours: '',
              image:
                'https://store-images.s-microsoft.com/image/apps.51903.71972716530068101.ccdcadf1-1d2a-49f2-9c37-0b0a27e5a53c.08e06d2d-1104-4c80-b879-91facf8348d5?mode=scale&q=90&h=300&w=200',
              name: "Assassin's Creed",
              bussines: 'Ubsoft',
              discount: '',
              oldPrice: '',
              currentPrice: '200,00',
            },
          ]}
        />
        <GameCard
          title="Trial Week"
          infoTitle="Ghost Recon BreakPoint"
          descriptionTitle="Squad up for the ultimate military co-op experience and save up to 67% off! Trial ends July 20."
          img="https://i0.wp.com/www.demonvideogame.com/wp-content/uploads/2019/10/tom-clancys-ghost-recon-breakpoint-4.jpg?resize=768%2C432&ssl=1"
          background="#f14"
        />
      </MainContainer>
    </Container>
  );
}
