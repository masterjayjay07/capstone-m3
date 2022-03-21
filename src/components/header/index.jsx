import { Link, useHistory } from "react-router-dom";
import { Container } from "./styles";
import Button from "../button";
import { buttonThemes } from "../../styles/themes";
import { MobileNav } from "../mobileNav";
import { useAuth } from "../../provider/Auth";
import DeskNav from "../deskNav";
import LogoHeader from "../../assets/Logos/Logo-Header.svg";
import { useItemsList } from "../../provider/ItemsList";
import { useGuests } from "../../provider/Guests";

const Header = () => {
  const { userToken, handleLogout } = useAuth();
  const { setItemsList } = useItemsList();
  const { setGuests } = useGuests();
  const history = useHistory();
  const handleBack = () => {
    setItemsList([]);
    setGuests([]);
    history.push("/dashboard");
  };

  return (
    <Container>
      <Link to="/">
        <img src={LogoHeader} alt="Logo" />
      </Link>

      {userToken !== "" ? (
        <nav>
          <Button theme={buttonThemes.header} onClick={handleBack}>
            Voltar
          </Button>
          <Button theme={buttonThemes.header} onClick={handleLogout}>
            Logout
          </Button>
        </nav>
      ) : (
        <>
          <MobileNav />
          <DeskNav />
        </>
      )}
    </Container>
  );
};

export default Header;
