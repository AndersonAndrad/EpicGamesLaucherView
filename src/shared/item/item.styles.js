import styled from 'styled-components';

export const Container = styled.div``;

export const Items = styled.div`
  width: 300px;
  height: 500px;
  margin: 10px;
  padding: 15px;
`;

export const Image = styled.div`
  width: 100%;
  height: 400px;
`;

export const PriceGameContainer = styled.div`
  max-width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
