import { Container } from "./styles";

const CardEvent = ({ event, ...rest }) => {

  function dateConverso(date){
    return date.split('-').reverse().join('/')
  }

  return (
    <Container {...rest}>
      {event && (
        <>
          <hr />
          <p>{event.name} </p>
          <span>Quando? {event.location}</span>
          <span>Onde? {(event.date)}</span>
        </>
      )}
    </Container>
  );
};

export default CardEvent;
