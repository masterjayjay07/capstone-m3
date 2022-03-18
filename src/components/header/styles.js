import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0 0 0 15px;

  nav {
    display: none;
    background: var(--color-stateBlue);
    padding: 0 10px 0 0;

    button + button {
      margin-left: 5px;
    }
  }

  @media (min-width: 425px) {
    nav {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin-top: 0;
      background: transparent;
    }
    svg {
      display: none;
    }
  }
`;

export const BurguerButton = styled.button`
  background: transparent;
  border: none;

  svg {
    font-size: 35px;
    color: var(--color-stateBlue);
    padding-right: 10px;
  }
`;
