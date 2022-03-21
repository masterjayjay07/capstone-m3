import { useHistory } from "react-router-dom";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { buttonThemes } from "../../styles/themes";
import Button from "../button";
import { Container } from "./styles";

const LpStack1 = () => {
  const history = useHistory();

  const scrollToStack2 = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <p>
        Facilite os encontros da galera, <span>Bora Marcar!</span>
      </p>
      <Button
        theme={buttonThemes.default}
        onClick={() => history.push("/dashboard")}
      >
        Criar evento
      </Button>
      <HiOutlineArrowNarrowDown onClick={() => scrollToStack2()} />
    </Container>
  );
};

export default LpStack1;
