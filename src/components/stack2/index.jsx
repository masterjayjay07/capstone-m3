import Container from "./styles";
import { AiFillWechat } from "react-icons/ai";
import { GiMeat } from "react-icons/gi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import {FaExchangeAlt} from 'react-icons/fa'

const Stack2 = () => {
  return (
    <Container>
      <h2>Veja as vantagens do nosso aplicativo.</h2>
      <div>
        <span>
          {" "}
          <AiFillWechat /> Converse em tempo real com os integrantes do evento.
        </span>
        <span>
          {" "}
          <GiMeat /> Veja o que cada um irá levar através da nossa lista.
        </span>
        <span>
          <FaRegMoneyBillAlt /> Todos os valores são exibidos publicamente.
        </span>
        <span>
          {" "}
          <FaExchangeAlt /> Eventos podem ser alterados sempre que necessário.
        </span>
      </div>
    </Container>
  );
};

export default Stack2;
