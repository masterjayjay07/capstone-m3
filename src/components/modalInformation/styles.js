import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-middleBluePurple);
  width: 300px;
  height: 400px;
  overflow: auto;
  border: 3px solid var(--color-darkPurple);
  border-radius: 3px;
  p {
    margin: 6px;
  }
`;

export const WrongText = styled.div`
  p {
    color: #dc143c;
    font-weight: bold;
  }
  img {
    width: 220px;
    height: 260px;
  }
`;

export const RightText = styled.div`
  p {
    color: #00ff7f;
    font-weight: bold;
  }
  img {
    width: 220px;
    height: 260px;
  }
`;
