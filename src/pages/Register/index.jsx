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
        <p>Treta na hora de decidir o rolê? Deixa que a gente resolve!</p>
        <img src={Logo} alt="Brinde a criação da sua conta" />
        </section>

        <div>
          <FormRegister />
        </div>
      </Container>
    </>
  );
};

export default Register;
