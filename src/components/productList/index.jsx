// import { useItemsList } from "../../provider/ItemsList";
import NewItemButton from "../newItemButton";

const ProductList = () => {
  // const { itemsList } = useItemsList();
  // mock array
  const mockItemsList = [
    { name: "Carne", price: 60.42, quantity: 3 },
    { name: "Cerveja", price: 35.99, quantity: 7 },
    { name: "Gelo", price: 10, quantity: 3 },
    { name: "Amendoins", price: 10.99, quantity: 4 },
    { name: "Refrigerante", price: 8.9, quantity: 2 },
    { name: "Carvão", price: 3.5, quantity: 3 },
  ];
  const treatNumbers = num => num.toFixed(2).toString().replace(".", ",");

  const totalPrice = itemsArray => {
    const totalSum = itemsArray.reduce(
      (sum, currentItem) => (sum += currentItem.price * currentItem.quantity),
      0
    );

    return treatNumbers(totalSum);
  };

  return (
    <>
      <div>
        <p>Total Produtos</p>
        <span>R$ {totalPrice(mockItemsList)}</span>
        <NewItemButton onClick={() => console.log("modal de novo produto")} />
      </div>
      <ul>
        {mockItemsList.map((item, idx) => (
          <li key={idx} info={item} onClick={() => console.log(item)}>
            <p>{item.name}</p>
            <span>R$ {treatNumbers(item.price * item.quantity)}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
