import { Link, useHistory } from "react-router-dom";
import Button from "../button";
import { Container } from "./styles";
import { buttonThemes } from "../../styles/themes";

const Header = () => {
  const history = useHistory();

  return (
    <Container>
      <Link to="/">
        <img src="" alt="Logo" />
      </Link>
      <nav>
        <div>
          <Button theme={buttonThemes.header} onClick={() => history.push("/login")}>Entrar</Button>
          <Button theme={buttonThemes.header} onClick={() => history.push("/register")}>
            Cadastrar-se
          </Button>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
