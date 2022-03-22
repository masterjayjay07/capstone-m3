import { createContext, useContext, useState } from "react";
import { useGuests } from "../Guests";

export const ItemsListContext = createContext();

export const ItemsListProvider = ({ children }) => {
  const [itemsList, setItemsList] = useState([]);
  const { genId } = useGuests();

  const handleNewItem = data => {
    const id = genId(itemsList);
    const item = { ...data, id };
    setItemsList([...itemsList, item]);
  };

  const handleEditItem = (itemId, key, newValue) => {
    if (!!newValue !== false) {
      const item = itemsList.find(({ id }) => id === itemId);
      item[key] = newValue;
      setItemsList([...itemsList]);
    }
  };

  const handleDeleteItem = itemId => {
    setItemsList(itemsList.filter(({ id }) => id !== itemId));
  };

  return (
    <ItemsListContext.Provider
      value={{
        itemsList,
        setItemsList,
        handleNewItem,
        handleDeleteItem,
        handleEditItem,
      }}
    >
      {children}
    </ItemsListContext.Provider>
  );
};

export const useItemsList = () => useContext(ItemsListContext);
