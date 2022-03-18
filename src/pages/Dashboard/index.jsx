import { Container } from "./styles";
import { useEvents } from "../../provider/Events";
import Button from "../../components/button";
import { buttonThemes } from "../../styles/themes";

const Dashboard = () => {
  const { userEvents } = useEvents(); //array de eventos do usuário

  return (
    <Container>
      <div>
        <span>Bem vindo {`user`}</span>
        <span>Editar Perfil</span>
      </div>

      <div>
        <span>Meus eventos</span>
        <span>Card dos eventos</span>
      </div>
      
      <section>
        <Button children={"+"} theme={buttonThemes.add} />
      </section>
    </Container>
  );
};

export default Dashboard;
