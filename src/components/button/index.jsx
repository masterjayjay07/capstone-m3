import { Container } from "./styles";

const Button = ({ children, icon: Icon, ...rest }) => (
  <Container {...rest}>
    {Icon && <Icon />}
    {children}
  </Container>
);

export default Button;
