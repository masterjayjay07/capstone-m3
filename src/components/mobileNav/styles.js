import styled from "styled-components";

export const Container = styled.nav`
  width: 150px;
  height: 120px;

  ul {
    width: 100%;

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
  padding-top: 45px;
  margin-left: 116px;

  svg {
    font-size: 35px;
    color: var(--color-stateBlue);
    padding-right: 10px;
  }

  @media (min-width: 425px) {
    display: none;
  }
`;
