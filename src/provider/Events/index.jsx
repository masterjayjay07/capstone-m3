import { createContext, useEffect, useState } from "react";
import boraMarcarApi from "../../services/api";
import { useAuth } from "../Auth";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const { userToken, userId } = useAuth();

  const [userEvents, setUserEvents] = useState([]);

  const getUserEvents = () => {
    boraMarcarApi
      .get(`/events?userId=${userId}`)
      .then(({ data }) => setUserEvents(data))
      .catch((error) => console.log(error));
  };
  const handleCreateEvent = (data) => {
    boraMarcarApi.post(
      "/events",
      { ...data, userId },
      { headers: { Authorization: `Bearer ${userToken}` } }
    ).then(({data})=>{
        setUserEvents([...userEvents, data])
    })
  };

  useEffect(()=>{
      
  })
};
