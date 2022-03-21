import Button from "../button/index";
import Input from "../input";
import { Container } from "./styles";
import { buttonThemes } from "../../styles/themes";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEvents } from "../../provider/Events";

const FormAddEvent = ({ handleClose }) => {
  const { handleCreateEvent } = useEvents();

  const Schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    date: yup.string().required("Data Obrigatória"),
    address: yup.string().required("Local Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const onSubmitFunction = async (data) => {
    await handleCreateEvent(data);
    handleClose();
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Novo Evento</h2>
      <Input
        label="Nome"
        register={register}
        name="name"
        error={!!errors.name?.message}
        helperText={errors.name?.message}
      />
      <Input
        register={register}
        name="date"
        error={!!errors.date?.message}
        helperText={errors.date?.message}
        type="date"
        sx={{ width: "225px" }}
      />
      <Input
        label="Endereço"
        register={register}
        name="address"
        error={!!errors.address?.message}
        helperText={errors.address?.message}
      />
      <Button theme={buttonThemes.add} children="Adicionar" type="submit" />
    </Container>
  );
};

export default FormAddEvent;
