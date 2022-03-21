import { Container, ContainerButtons } from "./styles";

import { useItemsList } from "../../provider/ItemsList";

import Button from "../button";
import { buttonThemes } from "../../styles/themes";

const ModalConfirmEvent = () => {
  const { itemsList } = useItemsList();
  const treatNumbers = num =>
    Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(num);

  const totalPrice = itemsArray => {
    console.log(itemsArray);
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
        <span>{totalPrice(itemsList)}</span>
      </div>
      <ul>
        {itemsList
          .sort((a, b) => a.whoTakes.id - b.whoTakes.id)
          .map(item => (
            <li key={item.id} info={item}>
              <p>{item.whoTakes.name}</p>
              <div>
                <p>{item.itemName}</p>
                <span>{treatNumbers(item.price * item.quantity)}</span>
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
