import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 950px;
  width: 100%;
  max-width: 300px;
  background-color: #121212;
  justify-content: space-between;
`;

export const ContainerPrimaryItens = styled.div`
  padding-left: 40px;
  height: 100%;
`;

export const ContainerSecundaryItens = styled.div`
  height: 100%;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  align-items: flex-start;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  color: #fff;
  width: 100%;
  align-items: center;
  margin: 10px 0px 20px 0px;
  label {
    margin-left: 40px;
  }
`;
