import React from 'react';
import img1 from '../img/deportes.jpg';
import img2 from '../img/entretenimiento.jpg';
import img3 from '../img/musica.jpg';
import img4 from '../img/politica.jfif';
import img5 from '../img/religion.jpg';
import img6 from '../img/educacion.jfif';

const Categorias= [
    {
        nombre:"educacion",
        img: img6
    },
    {
        nombre:"religion",
        img: img5
    },
    {
        nombre:"politica",
        img: img4
    },
    {
        nombre: "musica",
        img: img3
    },
    {
        nombre: "entretenimiento",
        img: img2
    },
    {
        nombre:"deportes",
        img: img1
    }

]

const Sections = () => {
    const catWiki = Categorias.map(cat =>
        <div className="" style={{width: '18rem'}}>
  <img src={cat.img} className="card-img-top imgCat" alt="..." />
  <p className="card-text">{cat.nombre} </p>
  </div>
        )

    return (
        <>
        <h3 className='h3 text-center'>Categorias</h3>3
        <div className="row container text-center cardsCategorias">
            {catWiki}
        </div>
        </>
    );
}

export default Sections;
