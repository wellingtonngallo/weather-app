import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F1F1F1;
    --gray-100: #EBEBEB;
    --gray-200: rgba(51, 51, 51, 0.1);
    --gray-300: #B4B4B4;
    --gray-400: #737c84;
    --blue: #69A3FF;
    --orange: #FF9632;
    --red: #ED1946;
    --white: #FFFFFF;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: Helvetica, Arial, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
`;