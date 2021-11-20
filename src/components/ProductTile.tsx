import { IProduct } from "../interfaces";

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

  const addToCart = (item: IProduct) => {
    console.log(item);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h2>{brandName}</h2>
      <h2>{categoryName}</h2>
      <img src={imageUrl} />
      <h3>{recommendedRetailPrice}</h3>
      <h3>{recommendedRetailPriceCurrency}</h3>
      <button onClick={() => addToCart(props.product)}>Add to cart</button>
    </div>
  );
};

export default ProductTile;
