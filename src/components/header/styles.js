import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 10px 150px;

  nav {
    width: 56%;
    display: flex;
    justify-content: space-between;

    div {
      width: 160px;
      display: flex;
      justify-content: space-between;
    }
  }
`;
