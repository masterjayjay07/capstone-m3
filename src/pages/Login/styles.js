import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  a {
    margin-bottom: 15px;
  }
  img {
    width: 180px;
    height: 180px;
  }
  form {
    background: var(--color-middleBluePurple);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 280px;
    border-radius: 4px;
    padding: 20px 10px;
    gap: 10px;

    h2 {
      margin-bottom: 12px;
    }
  }
`;
