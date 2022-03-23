import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import boraMarcarApi from "../../services/api";
import { useAuth } from "../Auth";
import { useGuests } from "../Guests";
import { useItemsList } from "../ItemsList";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const { userToken, userId } = useAuth();
  const { guests } = useGuests();
  const { itemsList } = useItemsList();

  const [finalSolution, setFinalSolution] = useState({
    totalPrice: 0,
    averagePrice: 0,
    guests: {},
  });
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
    const newEvent = {
      ...data,
      itemsList: [],
      guests: [],
      confirmed: false,
      userId,
    };
    boraMarcarApi
      .post("/events", newEvent, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then(({ data }) => {
        setUserEvents([...userEvents, data]);
        toast.success("Evento criado!");
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
        toast.success("Evento marcado!");
      })
      .catch((error) => console.log(error));
  };

  const handleWhoTakes = () => {
    let workGuestsArray = [...guests];

    for (let i = 0; i < itemsList.length; i++) {
      const randomGuest =
        workGuestsArray[Math.floor(Math.random() * workGuestsArray.length)];

      finalSolution.guests[randomGuest.name].productList.push(itemsList[i]);

      
      workGuestsArray = workGuestsArray.filter(guest => {
        return guest.id !== randomGuest.id;
      });
      
  
      if (workGuestsArray.length === 0) {
        workGuestsArray = [...guests];
      }
    }
  };

  const handleCostDivision = () => {
    for (const guest in finalSolution.guests) {
      finalSolution.guests[guest].productList.forEach(
        (item) => (item.itemCost = Number(item.price) * Number(item.quantity))
      );

      finalSolution.guests[guest].totalCost =
        finalSolution.guests[guest].productList.reduce(
          (sum, { itemCost }) => (sum += itemCost),
          0
        ) - finalSolution.averagePrice;
    }
  };

  const handleLetsMake = () => {
    finalSolution.totalPrice = itemsList.reduce(
      (sum, item) => (sum += Number(item.price) * Number(item.quantity)),
      0
    );

    finalSolution.averagePrice = Number(
      (finalSolution.totalPrice / guests.length).toFixed(2)
    );

    guests.forEach(({ name }) => {
      finalSolution.guests[name] = {
        totalCost: 0,
        productList: [],
      };
    });

    handleWhoTakes();
    handleCostDivision();
    setActiveEvent({
      ...activeEvent,
      eventResolution: finalSolution,
      guests,
      itemsList,
      confirmed: true,
    });
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
        handleLetsMake,
        finalSolution,
        setFinalSolution,
        getUserEvents,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);
