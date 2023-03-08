import React from 'react';

const Categorias = () => {
    return (
    <>
         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Deportes</a></li>
            <li><a className="dropdown-item" href="#">Religion</a></li>
            <li><a className="dropdown-item" href="#">Politica</a></li>
            <li><a className="dropdown-item" href="#">Entretenimiento</a></li>
            <li><a className="dropdown-item" href="#">Educacion</a></li>
            <li><a className="dropdown-item" href="#">Musica</a></li>
          </ul>
        </li>
    </>
    );
}

export default Categorias;
