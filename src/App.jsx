import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Header from './Components/Header/Header.jsx'
import ProductList from "./Components/Products/Products.jsx"
import Cart from "./Components/Cart/Cart.jsx"

const Parent = ({ children }) => {
  return <>{children}</>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent><Header/> <ProductList/></Parent>
  },
  {
    path: "/cart",
    element: <Parent><Header/> <Cart/></Parent>
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
