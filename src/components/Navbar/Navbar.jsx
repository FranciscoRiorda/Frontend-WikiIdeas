import React from "react";
import Categorias from "./Categorias/Categorias";
import Logo from '../Navbar/logo.png';
const Navbar = () => {
    return (
        <div className="colorNavbar">
            <nav className="navbar navbar-expand-lg colorNavbar">
  <div className="container-fluid">
   <img className="imgLogo text-center" src={Logo}></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        
         <Categorias/>
      </ul>
       
    </div>
  </div>
  
</nav>
        </div>
    );
}

export default Navbar;
