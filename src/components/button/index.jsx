import { Container } from "./styles";

export const Button = ({ children, icon: Icon, ...rest }) => (
  <Container {...rest}>
    {Icon && <Icon />}
    {children}
  </Container>
);
