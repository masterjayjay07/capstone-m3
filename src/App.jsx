import { LandingPage } from "./pages/LandingPage";
import { Toaster } from "react-hot-toast";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <LandingPage />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
