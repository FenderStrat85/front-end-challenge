import { useDispatch } from "react-redux";
import { IProduct } from "../../interfaces";

const CartItem = (props: any) => {
  const { name, recommendedRetailPrice, imageUrl } = props.itemData;
  const dispatch = useDispatch();
  const removeItem = (item: IProduct) => {
    dispatch({ type: "REMOVE_PRODUCT_FROM_CART", payload: item });
  };

  return (
    <div className="flex flex-row justify-between items-center flex-end align-items: center border-2 rounded-md p-2 m-2 bg-background">
      <div>
        <h1>{name}</h1>
        <h1>€{recommendedRetailPrice}</h1>
      </div>
      <div className="p-2 flex flex-col">
        <img
          className="object-contain h-40 p-2 border-2 rounded-lg "
          src={imageUrl}
        />
        <button className="m-2" onClick={() => removeItem(props.itemData)}>
          Delete Me!
        </button>
      </div>
    </div>
  );
};

export default CartItem;
