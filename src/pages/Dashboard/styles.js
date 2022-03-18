import styled from "styled-components";
import Button from "../../components/button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  gap: 10px;

  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 300px;
    width: 80%;
    height: 50px;
    background-color: var(--color-stateBlue);
  }

  .slotCards {
    display: flex;
    flex-direction: column;
    background-color: var(--color-stateBlue);
    width: 80%;
    align-items: center;
    min-width: 300px;
    min-height: 200px;
    max-height: 540px;
    overflow-y: auto;
    justify-content: space-around;
    text-align: center;

    span {
      border-bottom: 1.5px solid var(--color-darkPurple);
      font-family: "Nunito";
      font-size: 18px;
    }
  }

  .cards{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  Button {
    align-self: flex-end;
  }

  .spanTitle{
  margin: 10px;
 
  }
`;
