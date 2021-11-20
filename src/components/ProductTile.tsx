import { IProduct } from "../interfaces";
import { useDispatch } from "react-redux";
import { useState } from "react";

const ProductTile = (props: any) => {
  const {
    name,
    brandName,
    categoryName,
    gtin,
    imageUrl,
    recommendedRetailPrice,
    recommendedRetailPriceCurrency,
  } = props.product;

  const dispatch = useDispatch();

  const addToCart = (item: IProduct) => {
    dispatch({ type: "ADD_PRODUCT_TO_CART", payload: item });
  };

  return (
    <div className="flex flex-row justify-between flex-end border-2 rounded-md p-2 m-5 bg-background">
      <div>
        <h1>{name}</h1>
        <h2>Category: {categoryName}</h2>
        <h3> €{recommendedRetailPrice}</h3>
      </div>
      <div className="p-2 flex flex-col">
        <img
          className="object-contain h-40 p-2 border-2 rounded-lg "
          src={imageUrl}
        />

        <button className="m-2" onClick={() => addToCart(props.product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductTile;
