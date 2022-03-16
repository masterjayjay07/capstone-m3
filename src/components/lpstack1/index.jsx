import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { buttonThemes } from "../../styles/themes";
import Button from "../button";
import { Container } from "./styles";

const LpStack1 = () => {
  return (
    <Container>
      <p>
        Bem vindo(a)s ao <span>Bora Marcar!</span>. Insira aqui o slogan do seu
        negócio
      </p>
      <Button theme={buttonThemes.default}>Criar evento</Button>
      <HiOutlineArrowNarrowDown />
    </Container>
  );
};

export default LpStack1