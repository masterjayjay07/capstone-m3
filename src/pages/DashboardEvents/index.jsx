import Modal from "@mui/material/Modal";
import { useState } from "react";
import FormAddItem from "../../components/formAddItem";

const DashboardEvents = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <button onClick={handleOpen}>Adicionar participante</button>
      <Modal open={open} onClose={handleClose} sx={style}>
        <>
          <FormAddItem />
        </>
      </Modal>
    </>
  );
};

export default DashboardEvents;
