import { Toaster } from "react-hot-toast";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
