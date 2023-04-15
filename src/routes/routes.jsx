import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root/Root";
import SectionCateg from "../components/SectionCateg/SectionCateg";
import AbmArticulo from "../containers/AbmArticulo/AbmArticulo";
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
        path: '/nuevoArticulo',
        element: <AbmArticulo/>
      },
      {
        path: '/categoria/:idCategoria',
        element: <SectionCateg/>
      },
      // {
      //   path: '/articulo/:idArticulo/:idSource',
      //   element: <DetalleArticulo/>
      // }
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
