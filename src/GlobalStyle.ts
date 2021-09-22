import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: hsl(0, 0%, 100%);
        --lightGrey: hsl(0, 0%, 75%);
        --medGrey: hsl(0, 0%, 55%);
        --darkGrey: hsl(0, 0%, 15%);
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: Abel, sans-serif;
        outline: none;
    }

    body {
        margin: 0;
        padding: 0;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
            color: --white;
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }
    }
`;
