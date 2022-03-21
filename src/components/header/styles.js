import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 15px 0 0 0;
  a{
    margin: 15px;
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
