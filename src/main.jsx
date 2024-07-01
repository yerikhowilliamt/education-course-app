import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/error.jsx";
import ProductsPage from "./pages/product.jsx";
import AllProductPage from "./pages/allProductPage.jsx";
import DetailProductPage from "./pages/detailProductPage.jsx";
import CartPage from "./pages/cartPage.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsPage page="landingpage" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/beranda",
    element: <ProductsPage page="beranda" />,
  },
  {
    path: "/kategori",
    element: <AllProductPage/>,
  },
  {
    path: "/detail",
    element: <DetailProductPage/>,
  },
  {
    path: "/keranjang",
    element: <CartPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
