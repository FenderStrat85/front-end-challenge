import { IProduct } from "../interfaces";

const initState = {
  selectedProducts: <any>[],
};

const productReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, action.payload],
      };

    case "REMOVE_PRODUCT_FROM_CART":
      let copy = [...state.selectedProducts];
      const filtered = copy.filter((item) => {
        return item.gtin !== action.payload.gtin;
      });
      return { ...state, selectedProducts: filtered };

    default:
      return state;
  }
};

export default productReducer;
