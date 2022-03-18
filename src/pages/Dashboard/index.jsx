import { Container, ContainerEvent, ContainerAll } from "./styles";
import { useEvents } from "../../provider/Events";
import Button from "../../components/button";
import { buttonThemes } from "../../styles/themes";

import CardEvent from "../../components/cardEvent"; //esse card aqui é o do evento

const Dashboard = () => {
  const { userEvents } = useEvents(); //array de eventos do usuário

  return (
    <Container>
      <div className="header">
        <span>Bem vindo {`user`}</span>
        <span>Editar Perfil</span>
      </div>

      <div className="slotCards">
        <span className="spanTitle">Meus eventos</span>
        <div className="cards">
          {userEvents.length === 0 ? (
            <span>Você não possui eventos para visualizar</span>
          ) : (
            userEvents.map((item, index) => (
              <CardEvent key={index} event={item} />
            ))
          )}
        </div>
        <Button children={"+"} theme={buttonThemes.add} />
      </div>
     
    </Container>
    
  );
};

export default Dashboard;

//se for o dono, a linha muda de cor
/*  */
