import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import Input from "../input";
import { Form } from "./styles";
import { Button } from "../button";
import axios from "axios";
import api from "../../services/api";

const FormRegister = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3)
      .max(50)
      .matches("^[ a-zA-Z áãàâ]*$", "Nome apenas com letras"),

    age: yup
      .string()
      .required("Idade obrigatória")
      .matches(
        /^(?:1[8-9]|[2-9][0-9]|[1-9][0-9]{2,5}|1000000)$/gm,
        "Idade precisa ser maior que 18"
      ),

    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    confirmarEmail: yup
      .string()
      .required("Confirmação de e-mail obrigatória")
      .oneOf([yup.ref("email")], "E-mails precisam coincidir"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$",
        "Senha fraca"
      ),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "Senhas precisam coincidir"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onHandleSubmit = (data) => {
    const newPost = {
      name: data.name,
      password: data.password,
      age: data.age,
      email: data.email,
    };
    console.log(newPost);
    //aqui vai enviar para a API o post e enviar para o prox página
    //const {handleRegister} = useAuth()
    //handleRegister(newPost)
    //history.push('COLOCAR AQUI O ENDEREÇO DA PÁGINA DE LOGIN')
    
  };

  return (
    <Form onSubmit={handleSubmit(onHandleSubmit)}>
      <h2>Cadastro</h2>
      <Input
        label={"Seu nome completo"}
        error={!!errors.name?.message}
        register={register}
        helperText={errors.name?.message}
        name="name"
      />

      <Input
        label={"Sua idade"}
        error={!!errors.age?.message}
        register={register}
        helperText={errors.age?.message}
        name="age"
      />

      <Input
        label={"Seu melhor e-mail"}
        error={!!errors.email?.message}
        register={register}
        helperText={errors.email?.message}
        name="email"
      />

      <Input
        label={"Confirme seu e-mail"}
        error={!!errors.confirmarEmail?.message}
        register={register}
        helperText={errors.confirmarEmail?.message}
        name="confirmarEmail"
      />

      <Input
        label={"Uma senha bem segura"}
        error={!!errors.password?.message}
        register={register}
        helperText={errors.password?.message}
        name="password"
        type="password"
        id="outlined-adornment-password"
      />

      <Input
        label={"Confirmação de senha"}
        error={!!errors.confirmPassword?.message}
        register={register}
        helperText={errors.confirmPassword?.message}
        name="confirmPassword"
        type="password"
      />

      <Button type="submit" children={"Cadastrar"} />
    </Form>
  );
};

export default FormRegister;
