import Modal from "@mui/material/Modal";
import { useState } from "react";
import FormAddItem from "../../components/formAddItem";
import FormAddGuest from "../../components/formAddGuest";

const DashboardEvents = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openFormGuest, setOpenFormGuest] = useState(false);
  const handleOpenFormGuest = () => setOpenFormGuest(true);
  const handleCloseFormGuest = () => setOpenFormGuest(false);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  };

  return (
    <>
      <button onClick={handleOpen}>Adicionar item</button>
      <button onClick={handleOpenFormGuest}>Adicionar participante</button>
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
    </>
  );
};

export default DashboardEvents;
