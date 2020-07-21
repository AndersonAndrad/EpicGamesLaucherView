import styled from 'styled-components';

export const Container = styled.div``;

export const TitleContainer = styled.div`
  label {
    font-size: 20px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: ${(props) => props.background};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 40px;
`;

export const TitleInfo = styled.div`
  label {
    font-size: 35px;
  }
`;

export const DescriptionTitle = styled.div`
  max-width: 300px;
  color: #2a2a2a;
  margin-top: 15px;

  label {
    font-size: 20px;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  max-width: 140px;
  padding: 10px;
  border-radius: 2px;
  border: solid 1px #919191;
  margin-top: 15px;

  label {
    font-size: 18px;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 1000px;
`;
