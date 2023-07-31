import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ListProduct from "./components/listProduct";
import AddProduct from "./components/addProduct";
import UpdateProduct from "./components/updateProduct";
import ErrorPage from "./components/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListProduct />,
  },
  {
    path: "/add",
    element: <AddProduct />,
  },
  {
    path: "/update/:id",
    element: <UpdateProduct />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <div className="m-5">
        <h1 className="text-center">Redux Toolkit</h1>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
