import { Toaster } from "react-hot-toast";
import Header from "./components/header";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes />
    </>
  );
};

export default App;
