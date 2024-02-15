import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appStore } from "./store/appStore";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
]);
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Provider store={appStore}>
        <RouterProvider router={router} />
      </Provider>
    </LocalizationProvider>
  </React.StrictMode>
);
