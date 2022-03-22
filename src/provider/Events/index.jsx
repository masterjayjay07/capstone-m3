import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import boraMarcarApi from "../../services/api";
import { useAuth } from "../Auth";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const { userToken, userId } = useAuth();
  const [userEvents, setUserEvents] = useState([]);
  const [activeEvent, setActiveEvent] = useState(
    JSON.parse(localStorage.getItem("@BoraMarcar:activeEvent")) || {}
  );

  const getUserEvents = () => {
    boraMarcarApi
      .get(`/events?userId=${userId}`)
      .then(({ data }) => setUserEvents(data))
      .catch((error) => console.log(error));
  };

  const handleCreateEvent = (data) => {
    const newEvent = { ...data, itemsList: [], guests: [], userId };
    boraMarcarApi
      .post("/events", newEvent, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then(({ data }) => {
        setUserEvents([...userEvents, data]);
        toast.success('Evento criado!')

      });
  };

  const handleEditEvent = (data) => {
    boraMarcarApi
      .patch(`/events/${activeEvent.id}`, data, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then(({ data }) => {
        localStorage.setItem("@BoraMarcar:activeEvent", JSON.stringify(data));
        setActiveEvent({ ...data });
        toast.success('Evento alterado!')
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (userId) {
      getUserEvents();
    }
  }, [userId]);

  return (
    <EventContext.Provider
      value={{
        userEvents,
        activeEvent,
        setActiveEvent,
        handleCreateEvent,
        handleEditEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);
