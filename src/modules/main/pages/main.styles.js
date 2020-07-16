import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 30px 0px 20px;
  width: 100%;
  height: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`;

export const Pages = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
`;

export const SearchContainer = styled.div`
  /* flex */
  display: flex;
  align-items: center;

  background: #2a2a2a;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  padding-left: 10px;

  label {
    margin-left: 10px;
  }
`;

export const CarouselContainer = styled.div`
  margin: 40px 0px 0px 0px;
  width: 100%;
  height: 450px;
`;

export const List = styled.div`
  width: 100%;
  height: 100%;
`;

export const ListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
