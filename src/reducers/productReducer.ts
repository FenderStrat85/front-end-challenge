import { IProduct } from "../interfaces";

const initState = {
  selectedProducts: <any>[],
};

const productReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      console.log("state inside add function in reducers", state);
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, action.payload],
      };

    case "REMOVE_PRODUCT_FROM_CART":
      let copy = [...state.selectedProducts];
      console.log("copy", copy);
      console.log("action.payload", action.payload);
      const filtered = copy.filter((item) => {
        //@ts-ignore
        console.log(item.gtin);
        return item.gtin !== action.payload.gtin;
      });
      return { ...state, selectedProducts: filtered };
    // return {...state, selectedProducts: [state.selectedProducts.filter((item: IProduct) => {
    //   item.gtin !== action.payload.gtin;
    // }
    // });

    default:
      return state;
  }
};

export default productReducer;
