import { createContext, useContext, useState } from "react";
import { useGuests } from "../Guests";

export const ItemsListContext = createContext();

export const ItemsListProvider = ({ children }) => {
  const [itemsList, setItemsList] = useState([]);
  const { guests, genId } = useGuests();

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

  const handleWhoTakes = () => {
    let workArray = [...guests];
    let workList = [...itemsList];
    workList.sort((a, b) => Number(b.quantity) - Number(a.quantity));

    for (let i = 0; i < itemsList.length; i++) {
      const whoTakes = workArray[Math.floor(Math.random() * workArray.length)];

      workArray = workArray.filter(guest => guest.id !== whoTakes.id);

      itemsList[i] = { ...itemsList[i], whoTakes };

      if (workArray.length === 0) {
        workArray = [...guests];
      }
    }
  };

  const handleCostDivision = () => {
    const totalPrice = itemsList.reduce(
      (sum, item) => (sum += Number(item.price) * Number(item.quantity)),
      0
    );

    const averagePrice = totalPrice / guests.length;

    itemsList.forEach(item => {
      const priceDifference =
        Number(item.price) * Number(item.quantity) - averagePrice;
      // unica chave para armazenar divisao de custo do convidade, caso negativo exibir em vermelho else verde
      if (priceDifference > 0) {
        item.whoTakes.pays = priceDifference;
      } else {
        item.whoTakes.gets = Math.abs(priceDifference);
      }
    });
  };

  const handleLetsMake = () => {
    handleWhoTakes();
    handleCostDivision();
  };

  return (
    <ItemsListContext.Provider
      value={{
        itemsList,
        setItemsList,
        handleNewItem,
        handleDeleteItem,
        handleEditItem,
        handleLetsMake,
      }}
    >
      {children}
    </ItemsListContext.Provider>
  );
};

export const useItemsList = () => useContext(ItemsListContext);

