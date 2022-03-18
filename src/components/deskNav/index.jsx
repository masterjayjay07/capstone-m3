import { useHistory } from "react-router-dom";
import { buttonThemes } from "../../styles/themes";
import Button from "../button";
import { Container } from "./styles";

const DeskNav = () => {
  const history = useHistory();
  return (
    <Container>
      <Button
        theme={buttonThemes.header}
        onClick={() => history.push("/login")}
      >
        Entrar
      </Button>
      <Button
        theme={buttonThemes.header}
        onClick={() => history.push("/register")}
      >
        Cadastrar-se
      </Button>
    </Container>
  );
};

export default DeskNav;
