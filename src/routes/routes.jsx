import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root/Root";
import AbmArticulo from "../containers/AbmArticulo/AbmArticulo";
import Buscador from "../containers/Buscador/Buscador";
import DetalleArticulo from "../containers/DetalleArticulo/DetalleArticulo";

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
        path: '/articulo/:idArticulo/:idSource',
        element: <DetalleArticulo/>
      }
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
