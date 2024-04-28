import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// redux toolkit
import { Provider } from "react-redux";
import { store } from "./redux/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
