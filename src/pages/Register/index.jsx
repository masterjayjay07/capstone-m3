import { Container } from "./styles";
import FormRegister from "../../components/registerForm";
import Logo from "../../assets/images/registerImg.png"
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container>
      <section>
        <p>Insira os dados e crie a sua conta.</p>
        <img src={Logo} alt="Logo" />
      </section>

      <div>
        <FormRegister />
      </div>
    </Container>
  );
};

export default Register;
