import NewItemButton from "../newItemButton";
import { useItemsList } from "../../provider/ItemsList";

const ProductList = ({ handleOpen }) => {
  const { itemsList } = useItemsList();
  const treatNumbers = (num) => num.toFixed(2).toString().replace(".", ",");

  const totalPrice = (itemsArray) => {
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
        <span>R$ {totalPrice(itemsList)}</span>
        <NewItemButton onClick={() => handleOpen()} />
      </div>
      <ul>
        {itemsList.map((item, idx) => (
          <li key={idx} info={item} onClick={() => console.log(item)}>
            <p>{item.itemName}</p>
            <span>R$ {treatNumbers(item.price * item.quantity)}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
