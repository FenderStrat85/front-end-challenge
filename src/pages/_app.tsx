import type { AppProps } from "next/app";

import "../global.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import productReducer from "../reducers/productReducer";
//@ts-ignore
const store = createStore(productReducer);

const QogitaApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default QogitaApp;
