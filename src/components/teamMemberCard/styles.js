import styled from 'styled-components'

export const Container = styled.div`
display: flex;
width: 300px;
flex-wrap: wrap;
background-color: var(--color-middleBluePurple);
margin: 5px;
text-align: left;
border-radius: 4px;
flex-direction: column;
align-items: center;
a{
    text-decoration: none;
    margin: 5px;
}
p{
    margin: 5px;
}

img{
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin: 20px;
}
div{
    display: flex;
    flex-direction: column;
    height: 150px;
    justify-content: space-evenly;
}
`