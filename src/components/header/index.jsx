import { Link, useHistory } from "react-router-dom";
import Button from "../button";
import { Container } from "./styles";
import { buttonThemes } from "../../styles/themes";

export const Header = () => {
  const history = useHistory();

  return (
    <Container>
      {/* <Link to="/"> */}
      <img src="" alt="Logo" />
      {/* </Link> */}
      <nav>
        <Button
          theme={buttonThemes.header}
          // onClick={history.push("/events")}
        >
          Criar evento
        </Button>
        <div>
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
        </div>
      </nav>
    </Container>
  );
};
