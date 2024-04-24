import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./components/context";

const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Adding Context Provider here because this is the top most component, always try to keep
 * your store and context at very high levels generally index.js or App.js
 * Remember if you add Context Provider here, it will be available in App.js also since it provides 
 * data to components below it not where it is being used. So adding it here will make it available
 * in App.js and all the components below it
 */


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
