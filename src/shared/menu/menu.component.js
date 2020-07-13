import React from 'react';

// styles
import {
  Container,
  ContainerPrimaryItens,
  ContainerSecundaryItens,
  Item,
} from './menu.styles';
import {
  MdHome,
  MdLocalGroceryStore,
  MdPeople,
  MdFileDownload,
  MdApps,
  MdSettings,
  MdPerson,
} from 'react-icons/md';

export default function Menu() {
  return (
    <Container>
      <ContainerPrimaryItens>
        <Item>
          <MdHome size={35} />
          <label> Home</label>
        </Item>
        <Item>
          <MdLocalGroceryStore size={35} />
          <label> Store</label>
        </Item>
        <Item>
          <MdApps size={35} />
          <label> Library</label>
        </Item>
        <Item>
          <MdPeople size={35} />
          <label> Friends</label>
        </Item>
        <Item>
          <MdHome size={35} />
          <label> Unreal Engine</label>
        </Item>
      </ContainerPrimaryItens>
      <ContainerSecundaryItens>
        <Item>
          <MdFileDownload size={35} />
          <label>Downloads</label>
        </Item>
        <Item>
          <MdSettings size={35} />
          <label>Settings</label>
        </Item>
        <Item>
          <MdPerson size={35} />
          <label>UserName</label>
        </Item>
      </ContainerSecundaryItens>
    </Container>
  );
}
