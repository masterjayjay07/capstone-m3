import { useHistory } from "react-router-dom";
import Button from "../button";
import { Container } from "./styles";
import { buttonThemes } from "../../styles/themes";
import { FiMenu } from "react-icons/fi";

const Header = () => {

  const history = useHistory();

  return (
    <Container>
      {/* <Link to="/"> */}
      <img src="" alt="Logo" />
      {/* </Link> */}
        <FiMenu />
      <nav>
        <Button
          theme={buttonThemes.header}
          // onClick={history.push("/login")}
        >
          Entrar
        </Button>
        <Button
          theme={buttonThemes.header}
          // onClick={history.push("/signup")}
        >
          Cadastrar-se
        </Button>
      </nav>
    </Container>
  );
};

export default Header
