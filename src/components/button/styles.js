import styled from "styled-components";

export const Container = styled.button`
  background: transparent;
  border: 1px solid transparent;
  font-size: var(--button-font-size);
  color: var(--color-linen);
  transition: 0.3s;
  padding: 5px;
  border-radius: 8%;
  font-weight: bold;

  :hover {
    color: var(--color-lavenderGray);
    border: 1px solid var(--color-lavenderGray);
  }
`;
