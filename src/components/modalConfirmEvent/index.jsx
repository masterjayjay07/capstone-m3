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
            <p>  <strong> {guest} </strong> </p>
            <p>{treatNumbers(finalSolution.guests[guest].totalCost)}</p>
          </div>

          <div>
            {finalSolution.guests[guest].productList.map(
              ({ itemName, itemCost }) => (
                <div className="itemList">
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
        <p> <strong> Preço total dos produtos:</strong> </p>
        <span>{treatNumbers(finalSolution.totalPrice)}</span>
        </div>
        <div>
          <p> <strong> Média de preço por participante: </strong></p>
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
