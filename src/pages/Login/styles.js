import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  a {
    margin-bottom: 15px;
  }
  form {
    background: var(--color-middleBluePurple);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 290px;
    border-radius: 20px;
    padding: 15px;
    gap: 10px;

    h2 {
      margin-bottom: 15px;
    }
  }
`;
