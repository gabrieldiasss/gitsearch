import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        outline: 0;
    }

    :root {
        --background: #F4F4F4;
        --text: #191717;
        --link: #7187FF;
        --line: #E1E1E1;
        --text: #030822;
        --placeholder: #CACACA;
        --username: #B4B4B4;
        --background-repos: #E5E5E5;
        --blue: #5872FD;
    }

    html {
        @media (max-width: 1440px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }

        @media(max-width: 400px) {
            font-size: 81.125%;
        }

        @media(max-width: 350px) {
            font-size: 75%;
        }
    }

    body {
        -webkit-font-smoothing: antialiased;
        height: 100vh;
        background-color: var(--background);
    }

    h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    a {
        text-decoration: none;
        color: var(--link);
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }

    a:hover {
        text-decoration: underline;
    }

    body, strong, p, span {
        font-family: 'Roboto', sans-serif;
    }

    button, input, select {
        font-family: 'Poppins', sans-serif;
        border: 0;
        border-radius: 7px;
    }

    button {
        background: var(--blue);

        cursor: pointer;

        font-weight: 600;
        box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.20);
    }

`