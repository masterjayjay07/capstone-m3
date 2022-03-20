import { useGuests } from "../../provider/Guests";
import NewItemButton from "../newItemButton";

const GuestList = ({ handleOpenFormGuest }) => {
  const { guests } = useGuests();

  return (
    <>
      <div>
        <p>Total de Convidados</p>
        <span>{guests ? guests.length : 0}</span>
        <NewItemButton onClick={() => handleOpenFormGuest()} />
      </div>
      <ul>
        {guests.map((item, idx) => (
          <li key={idx} info={item} onClick={() => console.log(item)}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GuestList;
