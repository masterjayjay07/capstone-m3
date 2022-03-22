import { Container } from "./styles";

const CardEvent = ({ event, ...rest }) => {

  return (
    <Container {...rest}>
      {event && (
        <>
          <hr />
          <p>{event.name} </p>
          <span>Quando? {event.date}</span>
          <span>Onde? {event.location}</span>
        </>
      )}
    </Container>
  );
};

export default CardEvent;
