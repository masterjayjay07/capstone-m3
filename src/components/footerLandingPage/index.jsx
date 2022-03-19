import { Container } from "./styles";
import TeamMember from "../teamMemberCard";
import { useState } from "react";

const Footer = () => {
  const [members, setMembers] = useState([
    {
      name: "Johão P. V. de Lima",
      role: "Scrum Master",
      img: "https://ca.slack-edge.com/TQZR39SET-U02867Z0F6F-1dad781602b3-512",
      insta: "",
      linkedin: "",
    },
    {
      name: "Anderson da Silva T. Pinto",
      role: "Product Owner",
      img: "https://ca.slack-edge.com/TQZR39SET-U02AX0Q714K-59c1210a07a7-512",
      insta: "",
      linkedin: "",
    },
    {
      name: "Victor R. G. dos Santos",
      role: "Tech Leader",
      img: "https://ca.slack-edge.com/TQZR39SET-U02AY9QDUGM-6f3cdd01c277-512",
      insta: "https://www.instagram.com/vramon_gs/",
      linkedin: "https://www.linkedin.com/in/victor--ramon/",
    },
    {
      name: "Marcelo Teixeira Modesti",
      role: "Quality Assurance",
      img: "https://ca.slack-edge.com/TQZR39SET-U02FGSVKD0R-d10ed6e4b277-512",
      insta: "",
      linkedin: "",
    },
    {
      name: "Yorran Rigatti",
      role: "Quality Assurance",
      img: "https://ca.slack-edge.com/TQZR39SET-U02FF0WK5QS-ef659f201956-512",
      insta: "",
      linkedin: "",
    },
  ]);

  return (
    <Container>
      <h2>Conheça a nossa equipe!</h2>
      <>
        {members.map((people, index) => {
          return <TeamMember key={index} member={people} />;
        })}
      </>
    </Container>
  );
};

export default Footer;
