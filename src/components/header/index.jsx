import { Link, useHistory } from "react-router-dom";
import { Container } from "./styles";
import Button from "../button";
import { buttonThemes } from "../../styles/themes";
import { MobileNav } from "../mobileNav";
import { useAuth } from "../../provider/Auth";
import DeskNav from "../deskNav";
import LogoHeader from "../../assets/Logos/Logo-Header.svg";

const Header = () => {
  const { userToken, handleLogout } = useAuth();
  const history = useHistory();

  return (
    <Container>
      <Link to="/">
        <img src={LogoHeader} alt="Logo" />
      </Link>

      {userToken !== "" ? (
        <nav>
          <Button
            theme={buttonThemes.header}
            onClick={() => history.push("/dashboard")}
          >
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
