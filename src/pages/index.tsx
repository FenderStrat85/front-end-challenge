import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import apiService from "../services/apiService";
import ProductTile from "../components/ProductTile";
import { IProduct } from "../interfaces";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [productList, setProductList] = useState<any>([]);
  const stateData = useSelector((state) => state);

  const getProducts = async () => {
    const page1 = await apiService.getProducts(1);
    const page2 = await apiService.getProducts(2);
    const page3 = await apiService.getProducts(3);
    const page4 = await apiService.getProducts(4);
    const page5 = await apiService.getProducts(5);

    const results = [
      ...page1.results,
      ...page2.results,
      ...page3.results,
      ...page4.results,
      ...page5.results,
    ];
    setProductList(results);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Layout>
      <strong>Products</strong>
      <br />
      {productList.length > 0 ? (
        productList.map((item: IProduct) => {
          return <ProductTile product={item}> </ProductTile>;
        })
      ) : (
        <strong>We're just fetching some products for you!</strong>
      )}
    </Layout>
  );
};

export default HomePage;
