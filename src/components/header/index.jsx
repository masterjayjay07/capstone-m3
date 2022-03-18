import { Link, useHistory } from "react-router-dom";
import { Container, LogoContainer } from "./styles";
import Button from "../button";
import { buttonThemes } from "../../styles/themes";
import { MobileNav } from "../mobileNav";
import { useAuth } from "../../provider/Auth";
import DeskNav from "../deskNav";

const Header = () => {
  const { userToken, handleLogout } = useAuth();
  const history = useHistory();

  return (
    <Container>
      <Link to="/">
        <LogoContainer />
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
