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
              
              <li>
                <Link className="link" to={"inicio"}>Inicio</Link>
              </li>

              <li>
                <Categorias />
              </li>

              <li>
                <Link className="link" to={"/nuevoArticulo"}>Crear Nuevo Artículo</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// eslint-disable-next-line no-lone-blocks
{
  /* <nav className="navbar navbar-expand-lg colorNavbar">
        <div className="container-fluid">
          <img className="imgLogo text-center" alt="logoWikiIdeas" src={Logo}></img>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <Categorias />
            </ul>
          </div>
          
        </div>
      </nav> */
}
