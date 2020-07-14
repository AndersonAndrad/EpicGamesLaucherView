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

  background: #919191;
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

export const ItemsContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const TitleItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 30px 0px 30px;
  align-items: center;
`;

export const Title = styled.div`
  label {
    font-size: 18px;
  }
`;

export const ButtonView = styled.div`
  padding: 5px 10px 5px 10px;
  border: solid 1px #919191;
  border-radius: 2px;
`;

export const ListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Item = styled.div`
  width: 300px;
  height: 500px;
  margin: 10px;
  padding: 15px;
`;

export const Image = styled.div`
  background: #ff1;
  width: 100%;
  height: 400px;
`;
export const Name = styled.div`
  margin: 10px 0px 5px 0px;
`;
export const Bussines = styled.div`
  margin: 10px 0px 5px 0px;

  label {
    color: #919191;
    font-weight: bold;
  }
`;
export const Price = styled.div`
  margin: 10px 0px 5px 0px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 180px;
`;
export const Discount = styled.div`
  background: #0084ff;
  padding: 5px;
  label {
    font-weight: bold;
  }
`;
export const OldPrice = styled.div`
  label {
    color: #919191;
    font-weight: bold;
  }
`;
export const CurrentPrice = styled.div`
  label {
    font-weight: bold;
  }
`;
