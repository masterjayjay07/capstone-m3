import { Container } from "./styles";

const CardEvent = ({ event }) => {
  return <Container>{event && <p>{event.name}</p>}</Container>;
};

export default CardEvent;
