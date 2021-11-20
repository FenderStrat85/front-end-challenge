import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { IProduct } from "../../interfaces";

const CartPage = () => {
  const [productsInCart, setProductsInCart] = useState<any>([]);
  const [currentTotal, setCurrentTotal] = useState<number>();
  let dataFromStore: any = useSelector((state: any) => {
    return state.selectedProducts;
  });
  console.log("data from store", dataFromStore);

  useEffect(() => {
    setProductsInCart(dataFromStore);
    getCurrentTotal(productsInCart);
  });

  const getCurrentTotal = (items: [IProduct]) => {
    if (items.length <= 0) {
      setCurrentTotal(0);
    } else {
      let total = 0;
      items.forEach((product) => {
        total += product.recommendedRetailPrice;
      });
      setCurrentTotal(total);
    }
  };

  return (
    <Layout>
      <h1>Your Cart</h1>
      <h2>current Total = {currentTotal}</h2>
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
