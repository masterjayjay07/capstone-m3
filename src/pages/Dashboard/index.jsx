import { Container, Header,SlotCard,CardsDiv } from "./styles";
import { useEvents } from "../../provider/Events";
import Button from "../../components/button";
import { buttonThemes } from "../../styles/themes";
import CardEvent from "../../components/cardEvent";
import { useAuth } from "../../provider/Auth"; 

const Dashboard = () => {
  
  const { userEvents } = useEvents(); 
  const {userName} = useAuth()
 
  return (
    <Container>
      <Header >
        <span>Bem vindo {userName} </span>
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
