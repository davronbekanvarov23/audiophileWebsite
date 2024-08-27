import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import GlobalContextProvider from "./context/UseGlobal.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <Provider store={store}>
      {" "}
      <Toaster />
      <App />
    </Provider>
  </GlobalContextProvider>
);
