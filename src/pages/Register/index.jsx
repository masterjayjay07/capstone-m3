import { Container } from "./styles";
import FormRegister from "../../components/registerForm";
import Logo from "../../assets/images/registerImg.png";
import Header from "../../components/header";

const Register = () => {
  return (
    <>
      <Header />
      <Container>
        <section>
          <p>Insira os dados e crie a sua conta.</p>
          <img src={Logo} alt="Logo" />
        </section>

        <div>
          <FormRegister />
        </div>
      </Container>
    </>
  );
};

export default Register;
