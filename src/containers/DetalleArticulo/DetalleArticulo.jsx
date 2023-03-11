import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./detalleArticuloStyles.css";

const DetalleArticulo = () => {

    const [data, setData] = useState('');
    const {idArticulo} = useParams();

    useEffect(()=>{
        (async()=>{

            try {
                

    
                
            } catch (error) {
                console.log(error);
            }

        })();
    }, []);
        
        
    

  return (
    <>
      <div className="botonesDetalle">
        <button className="btn btn-success">Editar Artículo</button>
        <button className="btn btn-danger">Reportar Artículo</button>
      </div>
      <div className="contenedorPrincipal">
        <div className="contenedorArticulo">
            <div className="tituloArticulo">
                <p></p>
            </div>
        </div>
      </div>
    </>
  );
};

export default DetalleArticulo;
