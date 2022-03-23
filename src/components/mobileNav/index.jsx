import { BurguerButton, Container } from "./styles";
import { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../button";
import { buttonThemes } from "../../styles/themes";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const history = useHistory();
  return (
    <Container>
      <BurguerButton open={open} onClick={() => setOpen(!open)}>
        {open ? <AiOutlineClose /> : <FiMenu />}
      </BurguerButton>
      {open && (
        <ul>
          <li>
            <Button
              theme={buttonThemes.header}
              onClick={() => {
                history.push("/login");
                setOpen(!open);
              }}
            >
              Entrar
            </Button>
          </li>
          <li>
            <Button
              theme={buttonThemes.header}
              onClick={() => {
                history.push("/register");
                setOpen(!open);
                
              }}
            >
              Cadastrar-se
            </Button>
          </li>
        </ul>
      )}
    </Container>
  );
};
