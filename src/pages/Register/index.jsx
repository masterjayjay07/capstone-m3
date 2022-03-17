import { Container } from "./styles";
import FormCadastro from "../../components/formCadastro";
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
        <FormCadastro />
      </div>
    </Container>
  );
};

export default Register;