import { createContext, useContext, useEffect, useState } from "react";
import boraMarcarApi from "../../services/api";
import { useAuth } from "../Auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { userToken, userId } = useAuth();

  const [user, setUser] = useState({});

  const getUserData = () => {
    boraMarcarApi
      .get(`/users?id=${userId}`)
      .then(({ data }) => {
        setUser(data[0]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (userToken) {
      getUserData();
    }
  }, [userToken]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);