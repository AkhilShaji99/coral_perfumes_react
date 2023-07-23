import {useRoutes } from "react-router-dom";
import HomePage from "../pages/home/index";
import LoginPage from "../pages/login/index";
import ProductPage from "../pages/product/index";
import BaseLayout from "../layouts/BaseLayout/Index";
const Router = () => {
    const routes = [
      {
        path: "/",
        element: <BaseLayout />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "login", element: <LoginPage /> },
          { path: "product/*", element: <ProductPage /> },
          // { path: "about", element: <About /> }
        ]
      }
    ];
    let element = useRoutes(routes);
  
    return element;
  };
export default Router;
