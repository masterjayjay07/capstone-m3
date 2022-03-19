import styled from "styled-components";

export const Container = styled.nav`
  margin: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ul {
    width: 100px;
    position: absolute;
    top: 40px;
    right: -5px;

    li {
      width: 100%;
      border-bottom: 1px solid var(--color-stateBlue);

      button {
        width: 100%;
        background: transparent;
        border: none;
        color: var(--color-linen);
      }
    }
  }
  @media (min-width: 425px) {
    ul {
      display: none;
    }
  }
`;

export const BurguerButton = styled.button`
  background: transparent;
  border: none;
  width: 35px;

  svg {
    font-size: 35px;
    color: var(--color-stateBlue);
  }

  @media (min-width: 425px) {
    display: none;
  }
`;
