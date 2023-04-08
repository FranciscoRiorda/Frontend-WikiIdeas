import React from "react";
import Categorias from "./Categorias/Categorias";
import Logo from "../Navbar/logo.png";
import "./navBarStyles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navBar2">
        <div className="contenedor">
          <div className="divLogo">
            <Link to={"/inicio"}>
              <img className="imgLogo" alt="logoWikiIdeas" src={Logo}></img>
            </Link>
          </div>
          <div className="contenedorUl">
            <ul>
              
              <div>
                <Link className="link" to={"inicio"}>Inicio</Link>
              </div>

              <div>
                <Categorias />
              </div>

              <div>
                <Link className="link" to={"/nuevoArticulo"}>Crear Nuevo Artículo</Link>
              </div>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
