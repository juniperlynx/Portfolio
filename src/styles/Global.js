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

    p {
        color: #00334d;
        font-size: 1.2rem;
    }

    h1 {
        color: #0077b3;
        font-size: 3.5rem;
    }

    h2 {
        color: #0077b3;
        font-size: 2.5rem;
    }

    @media (max-width: 750px) {
        p {
            font-size: 1rem;
        }
    
        h1 {
            font-size: 3rem;
        }
    
        h2 {
            font-size: 2rem;
        }
    }
`;

export default GlobalStyles;