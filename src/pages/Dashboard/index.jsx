import { Container, SubHeader, SlotCard, CardsDiv } from "./styles";
import { useEvents } from "../../provider/Events";
import Button from "../../components/button";
import { buttonThemes } from "../../styles/themes";
import Modal from "@mui/material/Modal";
import CardEvent from "../../components/cardEvent";
import FormAddEvent from "../../components/formAddEvent";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useUser } from "../../provider/User";
import { useItemsList } from "../../provider/ItemsList";
import { useGuests } from "../../provider/Guests";
import EditUser from "../../components/formEditProfile";
import Header from "../../components/header";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { userEvents, setActiveEvent } = useEvents();
  const { user } = useUser();
  const history = useHistory();
  const { setItemsList } = useItemsList();
  const { setGuests } = useGuests();

  const [openProfile, setOpenProfile] = useState(false); //state que controla se o modal está on/off
  const handleEditProfileClose = () => setOpenProfile(false); //funcao que altera o modal de editar user para on
  const handleEditProfileOpen = () => setOpenProfile(true); //funcao que altera o modal de editar user para on

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  };

  const handleActiveEvent = (eventId) => {
    const currentEvent = userEvents.find((element) => element.id === eventId);
    localStorage.setItem(
      "@BoraMarcar:activeEvent",
      JSON.stringify(currentEvent)
    );
    setActiveEvent(currentEvent);
    setItemsList(currentEvent.itemsList);
    setGuests(currentEvent.guests);
    history.push("/dashboard/events");
  };

  return (
    <>
      <Header />
      <Container>
        <h2>Bem vindo, {user.name}!</h2>
        <SubHeader>
          <Button //botao de editar usuário
            children={"Editar perfil"}
            theme={buttonThemes.add}
            onClick={() => {
              handleEditProfileOpen();
            }}
          ></Button>

          <Button
            children={"Adicionar evento"}
            theme={buttonThemes.add}
            onClick={handleOpen}
          />
        </SubHeader>

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
                  id={item.id}
                  onClick={() => handleActiveEvent(item.id)}
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
        {/* modal de editar evento */}

        <Modal open={openProfile} onClose={handleEditProfileClose} sx={style}>
          <>
            <EditUser handleClose={handleEditProfileClose} />
          </>
        </Modal>
      </Container>
    </>
  );
};

export default Dashboard;
