import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  max-width: 420px;
  height: 540px;
  margin: auto;
  border-radius: 4px;
  background-color: var(--color-middleBluePurple);
  border: 3px solid var(--color-darkPurple);
  > div {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 95%;
    padding: 30px;
    border-bottom: 2px solid var(--color-darkPurple);
    span {
      margin: 0 18px 0 auto;
    }
  }
  ul {
    flex: 1;
    list-style: none;
    width: 90%;
    max-height: 310px;
    padding: 0 15px;
    margin-bottom: 15px;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 8px;
      height: 10px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: var(--color-stateBlue);
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--color-darkPurple);
    }

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 10px;
      height: 45px;
      border-bottom: 1px solid var(--color-darkPurple);
      background: var(--color-light-purple);
      color: var(--color-darkPurple);
      border-radius: 4px 4px 0 0;
      p {
        padding: 0 5px;
      }
      div {
        display: flex;
        justify-content: space-between;
        padding: 0 5px;
      }
    }
  }
`;

export const ContainerButtons = styled.div`
  button {
    font-family: "Dancing Script", cursive;
    font-size: 18px;
    width: 48%;
    height: 40px;
    display: flex;
    color: var(--color-darkPurple);
  }
  button + button {
    color: var(--color-linen);
  }
`;
