import { buttonThemes } from "../../themes";
import { Container } from "./styles";

const Button = ({ children, theme = buttonThemes.default, ...rest }) => (
  <Container theme={theme} {...rest}>
    {children}  
  </Container>
);

export default Button