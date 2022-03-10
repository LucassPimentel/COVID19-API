import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Arial;
    text-decoration: none;
}

body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F0F8FF;
    transition: 0.5s
}

a {
    color: blue;
}

`;
export default GlobalStyle;
