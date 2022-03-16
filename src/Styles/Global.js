import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --color-darkPurple:        #24203b;
    --color-stateBlue:         #725ac1;
    --color-middleBluePurple:  #8d86c9;
    --color-lavenderGray:      #c4c4ce;
    --color-linen:             #f7ece1;

    --h1-font-size: 18px;
    --h2-font-size: 16px;
    --h3-font-size: 14px;
    --h4-font-size: 12px;

    --p-font-size: 12px;
    
    --span-font-size: 10px;

    --button-font-size: 14px;
}

body {
    background-color: var(--color-darkPurple);
    font-family: 'Nunito', sans-serif;  
}

h1, h2, h3, h4, h5, h6 {
font-family: 'Dancing Script', cursive;
}

a, li, ol, ul{
    text-decoration: none;
}

a{
    cursor: pointer;
    color: var(--color-darkPurple)
}

button{
    cursor: pointer;
}
`;

//Variáveis que poderão ser usadas como props
export const darkPurple = "#24203b";
export const stateBlue = "#725ac1";
export const middleBluePurple = "#8d86c9";
export const lavenderGray = "#c4c4ce";
export const linen = "#f7ece1";
