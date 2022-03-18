import { Container } from "./styles";
import FormRegister from "../../components/registerForm";
import { GiPartyFlags } from "react-icons/gi";

const Register = () => {
  return (
    <Container>
      <section>
        <p>Insira os dados e crie a sua conta.</p>
        <span>
          {/* 

            Substitua dentro deste span o GiPartyFlags pela 
            imagem que decidir usar como logo do APP
            
            */}
          <GiPartyFlags />
        </span>
      </section>

      <div>
        <FormRegister />
      </div>
    </Container>
  );
};

export default Register;