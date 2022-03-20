import { createContext, useContext, useState } from "react";

export const ItemsListContext = createContext();

export const ItemsListProvider = ({ children }) => {
  const [itemsList, setItemsList] = useState(JSON.parse(localStorage.getItem("@BoraMarcar:activeEvent"))?.itemsList || []);
  const [guestList, setGuestList] = useState(
    itemsList.map(({ whoTakes }) => whoTakes) || []
  );

  const genItemId = () => {
    let maxId = 0;
    itemsList.forEach((item) => {
      if (item.itemId > maxId) maxId = item.itemId;
    });
    return maxId + 1;
  };

  const handleNewItem = (data) => {
    const itemId = genItemId();
    const item = { ...data, itemId };
    setItemsList([...itemsList, item]);
  };

  const handleEditItem = (itemId, key, newValue) => {
    if (!!newValue !== false) {
      const item = itemsList.find(({ id }) => id === itemId);
      item[key] = newValue;
      setItemsList([...itemsList]);
    }
  };

  const handleDeleteItem = (itemId) => {
    setItemsList(itemsList.filter(({ id }) => id !== itemId));
  };

  const handleAddGuest = (newGuest) => setGuestList([...guestList, newGuest]);
  const handleRemoveGuest = (guestName) =>
    setGuestList(guestList.filter((guest) => guest !== guestName));
  const randomGuest = () => guestList[Math.floor(Math.random() * (guestList.length - 0)) + 0]
  const handleLetsMake = () => {
    const unifiedList = itemsList.map((item) => ({
      ...item, whoTakes: randomGuest()
    }));
    setItemsList([...unifiedList])
  };

  return (
    <ItemsListContext.Provider
      value={{
        itemsList,
        guestList,
        setItemsList,
        handleNewItem,
        handleDeleteItem,
        handleEditItem,
        handleAddGuest,
        handleRemoveGuest,
        handleLetsMake
      }}
    >
      {children}
    </ItemsListContext.Provider>
  );
};

export const useItemsList = () => useContext(ItemsListContext);
