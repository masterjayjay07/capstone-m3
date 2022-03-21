import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-darkPurple);
  color: var(--color-linen);
  min-width: 250px;
  height: 150px;
  border: none; 
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: 5px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 10px 5px 5px black;
    padding-left: 5px;
    color: var(--color-middleBluePurple);
    p{
    border-top: 2px solid var(--color-linen);
    }
  }

 

  
  p {
    border-top: 2px solid var(--color-stateBlue);
    font-size: 1.3rem;
    padding-top: 30px;
  }
`;
