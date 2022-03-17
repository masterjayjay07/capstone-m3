import Button from "../button/index";
import { Container } from "./styles";

const FormAddItem = () => {
  return (
    <Container>
      <h2>Novo Produto</h2>
      <input />
      <div>
        <input />
        <input />
      </div>
      <Button children="Adicionar" />
    </Container>
  );
};

export default FormAddItem;
