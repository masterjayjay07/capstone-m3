import { Container } from "./styles";

const CardEvent = ({ event, ...rest }) => {
  return <Container {...rest}>{event && <p>{event.name}</p>}</Container>;
};

export default CardEvent;
