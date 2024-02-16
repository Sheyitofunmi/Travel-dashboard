import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Flight from "./Pages/Flight.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Wallet from "./Pages/Wallet.jsx";
import Report from "./Pages/Report.jsx";
import Statistics from "./Pages/Statistics.jsx";
import Settings from "./Pages/Settings.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Flight />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "report",
        element: <Report />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
