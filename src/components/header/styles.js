import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 15px 0 0 0;
  a {
    margin: 15px;
  }
  img {
    transition: 1.5s;
    :hover {
      transform: scale(1.3);
    }
  }

  @media (min-width: 520px) {
    padding: 15px 60px 0 60px;
    nav {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin-top: 0;
      background: transparent;
    }
  }
`;
