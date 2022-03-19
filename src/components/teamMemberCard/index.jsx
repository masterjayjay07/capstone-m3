import { Container } from "./styles";
import { BsLinkedin } from "react-icons/bs"; //icone linkedin
import { AiOutlineInstagram } from "react-icons/ai";

const TeamMember = ({ member }) => {
  return (
    <Container>
      <img src={`${member.img}`} alt="perfil"></img>
      <p>
        <strong>Nome</strong>: {member.name}
      </p>
      <p>
        <strong> Cargo: </strong>
        {member.role}
      </p>
      <p>
       <a href="url" > <BsLinkedin />  </a> <a href="url"> <AiOutlineInstagram /> </a>{" "}
      </p>
    </Container>
  );
};

export default TeamMember;
