import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ListProduct from "./pages/exampleRedux";
import AddProduct from "./pages/exampleRedux/addProduct";
import UpdateProduct from "./pages/exampleRedux/updateProduct";
import ExampleContext from "./pages/exampleContext";
import ExampleReactQuery from "./pages/exampleReactQuery";
import ErrorPage from "./pages/welcome";

const router = createBrowserRouter([
  {
    path: "/redux-toolkit",
    element: <ListProduct />,
  },
  {
    path: "/redux-toolkit/add",
    element: <AddProduct />,
  },
  {
    path: "/redux-toolkit/update/:id",
    element: <UpdateProduct />,
  },
  {
    path: "/example-context",
    element: <ExampleContext />,
  },
  {
    path: "/example-reactquery",
    element: <ExampleReactQuery />,
  },
  {
    path: "/",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <div className="m-5">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
