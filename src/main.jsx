import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

/**
 * This is main file for our application. This is where the original React code for 
 * rendering is written. Adding any type of provider here will help us in providing 
 * or giving access to stores or functions of any kind to the whole application.
 * BrowserRouter is used to provide access to the logic of multiple pages.
 * Adding ContextProvider or Redux-Provider here will help us in giving access to store, states
 * action, reducer, etc.
 */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
