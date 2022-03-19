import { useItemsList } from "../../provider/ItemsList";
import NewItemButton from "../newItemButton";

const GuestList = ({ handleOpenFormGuest }) => {
  // mock array
  const { itemsList } = useItemsList();
  const guestList = itemsList.map(({ whoTakes }) => whoTakes);
  const totalGuests = (array) => array.length;

  return (
    <>
      <div>
        <p>Total de Convidados</p>
        <span>{totalGuests(guestList)}</span>
        <NewItemButton onClick={() => handleOpenFormGuest()} />
      </div>
      <ul>
        {guestList.map((item, idx) => (
          <li key={idx} info={item} onClick={() => console.log(item)}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GuestList;
