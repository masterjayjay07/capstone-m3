import { Container } from "./styles";

const CardEvent = ({ event, ...rest }) => {
  return <Container {...rest}>{event &&
    <>
    <hr />
    <p>{event.name}       </p>
    {console.log(event)}
    </>
    } </Container>
};

export default CardEvent;
