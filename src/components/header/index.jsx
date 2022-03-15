import { Link, useHistory } from "react-router-dom";
import { Button } from "../button";
import { Container } from "./styles";

export const Header = () => {
  const history = useHistory();

  return (
    <Container>
      {/* <Link to="/"> */}
      <a href="#">
        <img src="#" alt="Logo" />
      </a>
      {/* </Link> */}
      <nav>
        <Button
        //   onClick={history.push("/events")}
        >
          Criar evento
        </Button>
        <div>
          <Button
          //   onClick={history.push("/login")}
          >
            Entrar
          </Button>
          <Button
          //   onClick={history.push("/signup")}
          >
            Cadastrar-se
          </Button>
        </div>
      </nav>
    </Container>
  );
};
