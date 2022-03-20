import { createContext, useContext, useState } from "react";

export const GuestListContext = createContext();

export const GuestListProvider = ({ children }) => {
  const [guests, setGuests] = useState([]);

  const handleNewGuest = (data) => {
    setGuests([...guests, data]);
  };

  return (
    <GuestListContext.Provider
      value={{
        guests,
        setGuests,
        handleNewGuest,
      }}
    >
      {children}
    </GuestListContext.Provider>
  );
};

export const useGuests = () => useContext(GuestListContext);
