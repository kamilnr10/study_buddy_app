import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0px
}

*,*::after,*::before {
    box-sizing:inherit;
}

body {
    font-family: 'Montserrat', sans-serif;
}

a, button {
    font-family: 'Montserrat', sans-serif;
}
`;
