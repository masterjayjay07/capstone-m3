import { Link, useHistory } from "react-router-dom";
import { Container } from "./styles";
import Button from "../button";
import { buttonThemes } from "../../styles/themes";
import { MobileNav } from "../mobileNav";
import { useAuth } from "../../provider/Auth";
import DeskNav from "../deskNav";

const Header = () => {
  const history = useHistory();
  const { userToken, handleLogout } = useAuth();

  return (
    <Container>
      <Link to="/">
        <img src="" alt="Logo" />
      </Link>

      {userToken !== "" ? (
        <nav>
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
