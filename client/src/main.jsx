import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import reducers from "./reducers";

const store = configureStore(
  {
    reducers,
  },
  compose(applyMiddleware(thunk))
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
