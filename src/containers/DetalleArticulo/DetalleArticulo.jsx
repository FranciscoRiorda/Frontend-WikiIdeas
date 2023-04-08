// /* eslint-disable eqeqeq */
// import React, { useEffect } from "react";
// import { useContext } from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { Articulo } from "../../contexts/articulo";
// import "./detalleArticuloStyles.css";

// const DetalleArticulo = () => {

//     // eslint-disable-next-line no-unused-vars
//     const [data, setData] = useState('');
//     const {idArticulo} = useParams();
//     const {articulos} = useContext(Articulo);

//     // useEffect(()=>{
//     //   (async()=>{
//     //         // try {
//     //         //   const response = await fetch(
//     //         //     //Cambiar url y buscar por id
//     //         //     `https://es.wikipedia.org/w/rest.php/v1/search/page?q=${articulos}&limit=8`
//     //         //   );
//     //         //   const dataResponse = await response.json();
//     //         //   const dataResp = dataResponse.pages;
//     //         //   const dataId = dataResp.filter((idArt) => idArt.id == idArticulo)
//     //         //   setData(dataId[0]);
                
//     //         // } catch (error) {
//     //         //     console.log(error);
//     //         // }

//     //     })();
//     // }, [articulos, idArticulo, title]);


//   return (
//     <>
//       <div className="botonesDetalle">
//         <button className="btn btn-success">Editar Artículo</button>
//         <button className="btn btn-danger">Reportar Artículo</button>
//       </div>
//       <div className="contenedorPrincipal">
//         <div className="contenedorArticulo">
//             <div className="tituloArticulo">
//                 <p>{data.title}</p>
//                 <p>{data.excpert}</p>
//                 <p>{data.description}</p>
//                 <p>{data.excerpt}</p>
//             </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DetalleArticulo;
