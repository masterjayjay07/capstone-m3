import { Container, WrongText, RightText } from "./styles";
import Button from "../../components/button";
import right from "../../assets/images/right.jpeg";
import wrong from "../../assets/images/wrong.jpeg";

const ModalInformation = ({ handleCloseInfos }) => {
  return (
    <Container>
      <Button onClick={handleCloseInfos} children="X" />
      <p>
        <span>Seja bem-vindo ao nosso gerenciador de eventos!</span>
        <span>Aqui vão algumas dicas de como utilizá-lo:</span>
        <p>
          Não conseguimos definir as variações de seus possíveis produtos, então
          defina bem cada item pensando no que precisa ser entregue ao evento,
          ex:
        </p>{" "}
        <WrongText>
          <p>ERRADO</p>
          <img alt="wrong" src={wrong} />
        </WrongText>
        <RightText>
          <p>CORRETO</p>
          <img alt="right" src={right} />
        </RightText>
        <p>
          Nossa lógica de divisão visa manter os custos de maneira justa,
          primeiro dividimos os produtos aleatoriamente para cada convidado,
          depois vemos quem está pagando mais e selecionamos os que estão com
          menos gastos para ressarcir essas pessoas para que ninguém saia no
          prejuízo (sem mãos de vaca por aqui!).
        </p>
        <RightText>
          <img alt="Exemplo da lógica" src={right} />
        </RightText>
      </p>{" "}
      <p>
        Caso a divisão não tenha te agradado é só avisar que "Deu Ruim!".
        Geraremos uma nova divisão para você!
      </p>
      <p>
        <span>Bom evento para você e obrigado por utilizar nosso app! s2 </span>
      </p>
    </Container>
  );
};

export default ModalInformation;
