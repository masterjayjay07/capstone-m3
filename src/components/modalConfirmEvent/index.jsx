import { Container, ContainerButtons } from "./styles";

import { useItemsList } from "../../provider/ItemsList";

import Button from "../button";
import { buttonThemes } from "../../styles/themes";

const ModalConfirmEvent = () => {
  const { itemsList } = useItemsList();
  const treatNumbers = (num) => num.toFixed(2).toString().replace(".", ",");

  const totalPrice = (itemsArray) => {
    const totalSum = itemsArray.reduce(
      (sum, currentItem) => (sum += currentItem.price * currentItem.quantity),
      0
    );

    return treatNumbers(totalSum);
  };

  return (
    <Container>
      <div>
        <p>Total Produtos</p>
        <span>R$ {totalPrice(itemsList)}</span>
      </div>
      <ul>
        {itemsList.map((item) => (
          <li key={item.id} info={item}>
            <p>{item.whoTakes.name}</p>
            <div>
              <p>{item.itemName}</p>
              <span>R$ {treatNumbers(item.price * item.quantity)}</span>
            </div>
          </li>
        ))}
      </ul>
      <ContainerButtons>
        <Button children="Deu Ruim!" theme={buttonThemes.decline} />
        <Button children="Bora Marcar!" theme={buttonThemes.add} />
      </ContainerButtons>
    </Container>
  );
};

export default ModalConfirmEvent;
