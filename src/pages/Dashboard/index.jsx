import { Container, Header, SlotCard, CardsDiv } from "./styles";
import { useEvents } from "../../provider/Events";
import Button from "../../components/button";
import { buttonThemes } from "../../styles/themes";
import Modal from "@mui/material/Modal";
import CardEvent from "../../components/cardEvent";
import FormAddEvent from "../../components/formAddEvent";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useUser } from "../../provider/User";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { userEvents } = useEvents();
  const { user } = useUser();
  const history = useHistory();

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  };
  return (
    <Container>
      <h2>Bem vindo, {user.name}!</h2>
      <Header>
        <span>Editar Perfil</span>
        <Button children={"+"} theme={buttonThemes.add} onClick={handleOpen} />
      </Header>

      <SlotCard>
        <span>Meus eventos</span>
        <CardsDiv>
          {userEvents.length === 0 ? (
            <span>Você não possui eventos para visualizar</span>
          ) : (
            userEvents.map((item, index) => (
              <CardEvent
                key={index}
                event={item}
                onClick={() => history.push("/dashboard/events")}
              />
            ))
          )}
        </CardsDiv>
      </SlotCard>
      <Modal open={open} onClose={handleClose} sx={style}>
        <>
          <FormAddEvent handleClose={handleClose} />
        </>
      </Modal>
    </Container>
  );
};

export default Dashboard;
