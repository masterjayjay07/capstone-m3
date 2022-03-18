import NewItemButton from "../newItemButton";

const GuestList = ({ handleOpenFormGuest }) => {
  // mock array
  const mockGuestList = ["Johão", "Victor", "Marcelo", "Yorran", "Anderson"];

  const totalGuests = (array) => array.length;

  return (
    <>
      <div>
        <p>Total de Convidados</p>
        <span>{totalGuests(mockGuestList)}</span>
        <NewItemButton onClick={() => handleOpenFormGuest()} />
      </div>
      <ul>
        {mockGuestList.map((item, idx) => (
          <li key={idx} info={item} onClick={() => console.log(item)}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GuestList;
