import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 40px 20px 40px;
  margin: 50px 0px 0px 0px;
  background: ${(props) => props.background};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  label {
    font-size: ${(props) => props.size} + px;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  width: 100%;
  list-style: none;
`;
