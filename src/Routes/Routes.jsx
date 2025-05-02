import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("./bookData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/bookdetails/:id",
        loader: () => fetch("./bookData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
