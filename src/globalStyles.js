import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
    html{
        font-size: 70%;
    }
    body {
    font-family: "Montserrat", sans-serif;
      
    }
    #root{
      
    }
    .App {
      width: 100%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    footer {
      margin-top: auto;
    }
    a {
    text-decoration: none;
    color: rgb(20, 20, 20);
    }
`;

export default GlobalStyle;