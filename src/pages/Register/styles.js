import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;

  section {
    gap: 10%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    flex-wrap: wrap;
    text-align: center;

    svg {
      font-size: 150px;
    }

    p {
      color: var(--color-lavenderGray);
      font-size: 50px;
    }
  }

  @media screen and (max-width: 580px) {
    justify-content: center;
    svg {
      display: none;
    }
    p {
      display: none;
    }
    span {
    }
  }
`;
