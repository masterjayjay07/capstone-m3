import {
  Container,
  ContainerHeader,
  TabButton,
  EventTitle,
  Content,
  MainButton,
} from "./styles";

import { FaClipboardList, FaUserFriends } from "react-icons/fa";

import { useState } from "react";

import ProductList from "../../components/productList";
import GuestList from "../../components/guestList";
import Modal from "@mui/material/Modal";
import FormAddItem from "../../components/formAddItem";
import FormAddGuest from "../../components/formAddGuest";
import { useEvents } from "../../provider/Events";

const DashboardEvents = () => {
  const [productsTab, setProductsTab] = useState(true);
  const switchTabs = () => setProductsTab(!productsTab);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openFormGuest, setOpenFormGuest] = useState(false);
  const handleOpenFormGuest = () => setOpenFormGuest(true);
  const handleCloseFormGuest = () => setOpenFormGuest(false);
  const { activeEvent } = useEvents();

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  };

  return (
    <Container>
      <ContainerHeader>
        <TabButton active={productsTab} onClick={() => switchTabs()}>
          <p>
            <FaClipboardList />
          </p>
        </TabButton>
        <TabButton active={!productsTab} onClick={() => switchTabs()}>
          <p>
            <FaUserFriends />
          </p>
        </TabButton>
      </ContainerHeader>
      <EventTitle children={activeEvent.name} />
      <Content
        children={
          productsTab ? (
            <ProductList handleOpen={handleOpen} />
          ) : (
            <GuestList handleOpenFormGuest={handleOpenFormGuest} />
          )
        }
      />
      <MainButton
        onClick={() => console.log("modal da divisao")}
        children={"Marcar!"}
      />
      <Modal open={open} onClose={handleClose} sx={style}>
        <>
          <FormAddItem />
        </>
      </Modal>
      <Modal open={openFormGuest} onClose={handleCloseFormGuest} sx={style}>
        <>
          <FormAddGuest />
        </>
      </Modal>
    </Container>
  );
};

export default DashboardEvents;
