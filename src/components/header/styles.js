import styled from "styled-components";
import Logo from "../../assets/Logo.svg";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0 0 0 15px;
  nav {
  }

  @media (min-width: 425px) {
    nav {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin-top: 0;
      background: transparent;
    }
  }
`;

export const LogoContainer = styled.div`
  background-image: url(${Logo});
  background-size: cover;
  width: 116px;
  height: 41px;
`;
