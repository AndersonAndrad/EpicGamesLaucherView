import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: #121212;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    color: #eee;
    font-size: 14px;
    font-family: Raleway, Arial, Helvetica, sans-serif;
  }
  button {
    cursor: pointer;
  }

  @font-face {
    font-family: 'PTC55F';
    src: url('href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;500&display=swap" rel="stylesheet"') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
