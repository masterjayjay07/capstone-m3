import { Container, Header,SlotCard,CardsDiv } from "./styles";
import { useEvents } from "../../provider/Events";
import Button from "../../components/button";
import { buttonThemes } from "../../styles/themes";

import CardEvent from "../../components/cardEvent"; //esse card aqui é o do evento

const Dashboard = () => {
  const { userEvents } = useEvents(); //array de eventos do usuário
  //inserir o use Effect no userEvents
  return (
    <Container>
      <Header >
        <span>Bem vindo {`user`}</span>
        <span>Editar Perfil</span>
      </Header>

      <SlotCard >
        <span className="spanTitle">Meus eventos</span>
        <CardsDiv>
          {userEvents.length === 0 ? (
            <span>Você não possui eventos para visualizar</span>
          ) : (
            userEvents.map((item, index) => (
              <CardEvent key={index} event={item} />
            ))
          )}
        </CardsDiv>
        <Button children={"+"} theme={buttonThemes.add} />
      </SlotCard>
    </Container>
  );
};

export default Dashboard;
