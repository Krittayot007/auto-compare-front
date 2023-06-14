import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import Header from "../components/Header";
import ProductDetail from "../pages/ProductDetail";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/productDetail/:id", element: <ProductDetail /> },
        { path: "/addProduct", element: <AddProduct /> },
        { path: "/editProduct/:id", element: <EditProduct /> },
        { path: "/logout", element: <div className="text-xl">Logout</div> },
        {
          path: "*",
          element: <h1 className="text-xl text-red-300">Page not found</h1>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
