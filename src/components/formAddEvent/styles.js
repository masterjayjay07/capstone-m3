import styled from "styled-components";

export const Container = styled.form`
  width: 300px;
  height: 296px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-light-purple);
  border: 3px solid var(--color-darkPurple);
  border-radius: 3px;
  h2 {
    font-size: 1.3rem;
    font-family: "Nunito", sans-serif;
    border-bottom: 2px solid var(--color-darkPurple);
    width: 80%;
    text-align: center;
  }
  > input {
    width: 80%;
  }
  button {
    width: 80%;
    border-radius: 3px;
    color: var(--color-light-purple);
  }
`;
