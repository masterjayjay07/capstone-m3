import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 15px;

  nav {
    display: none;
    justify-content: space-between;
  }
  svg {
    font-size: 25px;
    color: var(--color-stateBlue);
  }

  @media (min-width: 425px) {
    nav {
      display: flex;
    }
    svg {
      display: none;
    }
  }
`;
