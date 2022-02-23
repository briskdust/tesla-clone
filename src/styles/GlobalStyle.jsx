import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: #393c41;
    font-family: "Rubik", sans-serif;
  }

  body {
    width: 100%;
    overflow-x: hidden;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(4px);
    }

    60% {
      transform: translateY(3px);
    }
  }
`;

export default GlobalStyle;
