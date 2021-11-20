import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { IProduct } from "../../interfaces";

const CartPage = () => {
  const [productsInCart, setProductsInCart] = useState<any>([]);
  let dataFromStore: any = useSelector((state: any) => {
    return state.selectedProducts;
  });
  console.log("data from store", dataFromStore);

  useEffect(() => {
    setProductsInCart(dataFromStore);
  });

  return (
    <Layout>
      <h1>Your Cart</h1>
      {productsInCart ? (
        productsInCart.map((item: any) => {
          return <CartItem key={item.gtin} itemData={item} />;
        })
      ) : (
        <h1>No products to display</h1>
      )}
    </Layout>
  );
};

export default CartPage;
