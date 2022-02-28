import { createGlobalStyle } from "styled-components";

{/* Define style elements that will apply to our whole app*/}
const GlobalStyles = createGlobalStyle`
    html {
        height: 100vh;
        width: 100vw;
        margin: 0px;
        padding: 0px;
    }

    body {
        box-sizing: border-box;
        font-family: sans-serif;
        margin: 0px;
        padding: 0px;
        overflow-x: hidden;
    }
`;

export default GlobalStyles;