import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => props.theme.background};
  border: ${(props) => props.theme.border};
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.color};
  transition: ${(props) => props.theme.transition};
  padding: ${(props) => props.theme.padding};
  border-radius: ${(props) => props.theme.borderRadius};
  font-weight: ${(props) => props.theme.fontWeight};

  :hover {
    background: ${(props) => props.theme.hover.background};
    color: ${(props) => props.theme.hover.color};
    border: ${(props) => props.theme.hover.border};
  }
`;
