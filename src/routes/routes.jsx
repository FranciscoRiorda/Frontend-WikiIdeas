import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root/Root";
import SectionCateg from "../components/SectionCateg/SectionCateg";
import Buscador from "../containers/Buscador/Buscador";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h2>Página no encontrada</h2>,
    children: [
      {
        path: "/",
        element: <Buscador />,
      },
      {
        path: '/inicio',
        element: <Buscador/>
      },
      {
        path: '/categoria/:idCategoria',
        element: <SectionCateg/>
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
