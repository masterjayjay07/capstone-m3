import Button from "../button/index";
import Input from "../input";
import { Container } from "./styles";
import { buttonThemes } from "../../styles/themes";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

const FormAddItem = () => {
  const Schema = yup.object().shape({
    itemName: yup.string().required("Campo Obrigatório"),
    quantity: yup.string().required("Campo Obrigatório"),
    price: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Novo Produto</h2>
      <Input label="Nome" register={register} name="itemName" />
      <div>
        <Input
          label="Quantidade"
          register={register}
          name="quantity"
          type="number"
        />
        <Input label="Preço" register={register} name="price" type="number" />
      </div>
      <Button theme={buttonThemes.add} children="Adicionar" type="submit" />
    </Container>
  );
};

export default FormAddItem;
