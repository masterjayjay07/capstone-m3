import styled from "styled-components";

export const Container = styled.nav`
  width: 150px;
  display: flex;
  height: 300px;

  ul {
    padding: 0 10px 10px 20px;
    background: red;
    margin-top: 125px;
    width: 100%;
  }

  @media (min-width: 425px) {
    /* display: none; */
  }
`;
