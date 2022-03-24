import { Container } from "./styles";

const CardEvent = ({ event, ...rest }) => {
  return (
    <Container {...rest}>

      {event && (
        <>
          <hr />
          <p>{event.name} </p>
          <span>
            Quando?{" "}
            {event.date ? event.date.split("-").reverse().join("/") : "Deus quiser!"}
          </span>
          <span>
            Onde? {event.location ? event.location : "Local não informado"}
          </span>
          {event.confirmed ? <span>Evento confirmado!</span> : <span>Evento não confirmado!</span>}
        </>
      )}
    </Container>
  );
};

export default CardEvent;
