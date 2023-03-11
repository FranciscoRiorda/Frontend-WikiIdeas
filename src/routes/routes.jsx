import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root/Root";
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
        element: <h2>Crear nuevo artículo</h2>
      },
      {
        path: '/articulo/:idArticulo',
        element: <DetalleArticulo/>
      }
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
