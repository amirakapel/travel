import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import AllDestination from "./Destination/AllDestination";
import AllCart from "./Cart/AllCart";
import AllHome from "./home/AllHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
    {
    path: "Home",
    element: <AllHome/>,
  },
  {
    path: "destination",
    element: <AllDestination/>,
  },
    {
    path: "cart",
    element: <AllCart/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
