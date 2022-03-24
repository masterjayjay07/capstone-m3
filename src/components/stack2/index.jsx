import Container from "./styles";
import { BsListCheck } from "react-icons/bs";
import { FaRegMoneyBillAlt, FaRegGrinWink } from "react-icons/fa";
import { RiChatSmile3Line } from "react-icons/ri";

const Stack2 = () => {
  return (
    <Container>
      <h2>Veja as vantagens do nosso aplicativo.</h2>
      <div>
        <span>
          <RiChatSmile3Line /> Evite discussões e poupe tempo para as decisões
          importantes.
        </span>
        <span>
          <BsListCheck /> Veja o que cada um irá levar através da nossa lista.
        </span>
        <span>
          <FaRegMoneyBillAlt /> Todos os valores são divididos e calculados de
          maneira justa.
        </span>
        <span>
          <FaRegGrinWink /> Organize seus eventos de forma prática e rápida.
        </span>
      </div>
    </Container>
  );
};

export default Stack2;
