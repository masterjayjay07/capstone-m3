import { Container, ContainerButtons } from "./styles";

import { useItemsList } from "../../provider/ItemsList";
import { useEvents } from "../../provider/Events";

import Button from "../button";
import { buttonThemes } from "../../styles/themes";

const ModalConfirmEvent = () => {
  const { finalSolution } = useEvents();

  const treatNumbers = num =>
    Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(num);

  const createList = () => {
    const arrayLi = [];
    for (const guest in finalSolution.guests) {
      arrayLi.push(
        <li key={Math.random()}>
          <p>{guest}</p>
          <div>
            {finalSolution.guests[guest].productList.map(({ itemName }) => (
              <p>{itemName}</p>
            ))}
          </div>
        </li>
      );
    }

    return arrayLi;
  };

  return (
    <Container>
      <div>
        <p>Total Produtos</p>
        <span>{treatNumbers(finalSolution.totalPrice)}</span>
      </div>
      <ul>{createList()}</ul>
      <ContainerButtons>
        <Button children="Deu Ruim!" theme={buttonThemes.decline} />
        <Button children="Bora Marcar!" theme={buttonThemes.add} />
      </ContainerButtons>
    </Container>
  );
};

export default ModalConfirmEvent;
