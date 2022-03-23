import { Container, ContainerButtons } from "./styles";
import { useEvents } from "../../provider/Events";

import Button from "../button";
import { buttonThemes } from "../../styles/themes";

const ModalConfirmEvent = ({ handleClose }) => {
  const { finalSolution, activeEvent, handleEditEvent } = useEvents();

  const treatNumbers = (num) =>
    Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(num);

  const createList = () => {
    const arrayLi = [];
    for (const guest in finalSolution.guests) {
      arrayLi.push(
        <li key={guest}>
          <div>
            <p>{guest} </p>
            <p>
              {finalSolution.guests[guest].totalCost > 0 ? (
                <span>
                  Receber: R$ {finalSolution.guests[guest].totalCost}
                </span>
              ) : (
                <span>
                  Pagar: R$ {finalSolution.guests[guest].totalCost * -1}
                </span>
              )}
            </p>
          </div>
          <div>
            {finalSolution.guests[guest].productList.map(
              ({ itemName, itemCost }) => (
                <div>
                  <p>{itemName}</p>
                  <p> {treatNumbers(itemCost)}</p>
                </div>
              )
            )}
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
        <Button
          children="Bora Marcar!"
          theme={buttonThemes.add}
          onClick={() => {
            handleEditEvent(activeEvent);
            handleClose();
          }}
        />
      </ContainerButtons>
    </Container>
  );
};

export default ModalConfirmEvent;