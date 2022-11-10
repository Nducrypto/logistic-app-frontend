import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { legacy_createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { ContextProvider } from "./States/Contexts/ContextProvider";
import Reducers from "./States/Reducers";
import { AuthContextProvider } from "./States/Contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";

const store = legacy_createStore(Reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ContextProvider>
    </BrowserRouter>
  </Provider>
);
