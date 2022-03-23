import { Container, ContainerButtons } from "./styles";
import { useHistory } from "react-router-dom";
import { useEvents } from "../../provider/Events";

import Button from "../button";
import { buttonThemes } from "../../styles/themes";

const ModalConfirmEvent = ({ handleClose }) => {
  const { finalSolution, activeEvent, handleEditEvent } = useEvents();
  const history = useHistory()

  const treatNumbers = (num) =>
    Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(num);

  const createList = () => {
    const arrayLi = [];
    for (const guest in finalSolution.guests) {
      arrayLi.push(
        <li key={Math.random()}>
          <div key={Math.random()}>
            <p>{guest}</p>
            <p>{treatNumbers(finalSolution.guests[guest].totalCost)}</p>
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
        <div>
        <p>Preço total dos produtos: </p>
        <span>{treatNumbers(finalSolution.totalPrice)}</span>
        </div>
        <div>
          <p>Média de preço do evento: </p>
          <span> R$ {(finalSolution.averagePrice).toFixed(2)}

          </span>
        </div>
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
