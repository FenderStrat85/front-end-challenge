import { useDispatch } from "react-redux";
import { IProduct } from "../../interfaces";

const CartItem = (props: any) => {
  const { name, recommendedRetailPrice, RecommendedRetailPriceCurrency } =
    props.itemData;
  const dispatch = useDispatch();
  const removeItem = (item: IProduct) => {
    dispatch({ type: "REMOVE_PRODUCT_FROM_CART", payload: item });
  };

  return (
    <div>
      <h1>{name}</h1>
      <h1>{recommendedRetailPrice}</h1>
      <h1>{RecommendedRetailPriceCurrency}</h1>
      <button onClick={() => removeItem(props.itemData)}>Delete Me!</button>
    </div>
  );
};

export default CartItem;
