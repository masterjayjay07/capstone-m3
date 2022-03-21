import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-darkPurple);
  color: var(--color-linen);
  width: 250px;
  height: 150px;
  border: none; 
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin: 5px;
  transition: 0.5s;
  flex-direction: column;
  cursor: pointer;
  hr{
      width: 100px ;
      height: 5px;
      background-color: var(--color-stateBlue);
      border: transparent;
      border-radius: 50px;
    }


  &:hover {
    box-shadow: 3px 3px 3px black;
    padding-left: 5px;
    color: var(--color-middleBluePurple);
    border: 1px solid var(--color-linen);
    opacity: 0.9;
    

    hr{
      border: 1px solid var(--color-darkPurple);
      background-color: var(--color-linen);
      width: 200px ;

    }
    p{
      color: var(--color-linen);
      font-weight: 800;
      font-size: 25px;
       opacity: 1;

    }
    
  }

 

  
  p {

    font-size: 1.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 240px;
    max-height: 240px;
    white-space: nowrap;
  }
`;
