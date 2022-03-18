import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import boraMarcarApi from "../../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [userName, setUserName] = useState("")
  const [userId, setUserId] = useState(0);
  const [userToken, setUserToken] = useState(
    JSON.parse(localStorage.getItem("@BoraMarcar:userToken")) || ""
  );

  const handleRegister = (data) => {
    boraMarcarApi
      .post("/register", data)
      .then(() => {
        toast.success("Conta criada com sucesso!");
        history.push("/login");
      })
      .catch(() => toast.error("Email já cadastrado!"));
  };

  const handleLogin = (data) => {
    boraMarcarApi
      .post("/login", data)
      .then(({ data }) => {
        localStorage.setItem(
          "@BoraMarcar:userToken",
          JSON.stringify(data.accessToken)
        );
        setUserToken(data.accessToken);
        setUserId(data.user.id);
        setUserName(data.user.name);
        console.log(userName);
        history.push("/dashboard");
      })
      .catch(() => toast.error("Email ou senha incorretos!"));
  };

  const handleLogout = () => {
    localStorage.clear();
    setUserToken("");
    setUserId(0)
  };

  return (
    <AuthContext.Provider
      value={{ userToken, userId, userName, handleLogin, handleLogout, handleRegister }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
