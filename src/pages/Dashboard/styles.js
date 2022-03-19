import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  > h2 {
    color: var(--color-linen);
  }
  Button {
    align-self: flex-end;
    margin: 5px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 300px;
  width: 80%;
  height: 50px;
  background-color: var(--color-stateBlue);
`;

export const SlotCard = styled.div`
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
  > span {
    border-bottom: 1.5px solid var(--color-darkPurple);
    font-family: "Nunito";
    font-size: 18px;
    margin: 10px;
  }
`;

export const CardsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-y: auto;
  span {
    border-bottom: 1.5px solid var(--color-darkPurple);
    font-family: "Nunito";
    font-size: 18px;
    margin: 10px;
  }
`;
