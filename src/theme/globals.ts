import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: ${({ theme: { font } }) => font.fontFamily.roboto}
    }

    body {
        background-color: ${({ theme: { color } }) => color.bgColor}
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
