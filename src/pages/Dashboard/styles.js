import styled from "styled-components";
import Button from "../../components/button";


export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
margin-top: 10px;
align-items: center;

Button{
    position: relative;
}

span{
    color: var(--color-darkPurple);
    font-family: 'Nunito', sans-serif;
}

div {
    display: flex;
    margin-top: 10px;
    background-color: var(--color-light-purple);
    min-height: 60px;
    width: 90%;
    align-items: center;
    justify-content: space-around;
}

div + div{
    display: flex;
    flex-direction: column;
}

section{
    margin-right: -80%;
}

}
`;
