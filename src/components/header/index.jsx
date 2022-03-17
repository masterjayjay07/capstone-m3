import { Link, useHistory } from "react-router-dom";
import { BurguerButton, Container } from "./styles";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Button from "../button";
import { buttonThemes } from "../../styles/themes";

const Header = () => {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <Container>
      <Link to="/">
        <img src="" alt="Logo" />
      </Link>
      <BurguerButton open={open} onClick={() => setOpen(!open)}>
        {open ? <AiOutlineClose /> : <FiMenu />}
      </BurguerButton>
      <nav open={open}>
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
      </nav>
    </Container>
  );
};

export default Header;
