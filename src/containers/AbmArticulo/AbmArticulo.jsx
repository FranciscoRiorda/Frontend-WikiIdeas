import React from "react";
import "./abmArticuloStyles.css";
import { FaPlusCircle } from "react-icons/fa";

const AbmArticulo = () => {
  return (
    <>
      <div className="fondoAbm">
        <div className="transparencia">
          <div className="tituloAbm">
            <p>Crear nuevo Artículo</p>
            <p className="circlePlus">
              <FaPlusCircle />
            </p>
          </div>
        </div>
      </div>

      <form action="" className="form-group col-12 column">
        <div className="form-group col-12 formulario2">
          <div className="form-group col-6">
            <input
              type="text"
              name="titulo"
              placeholder="Título del artículo"
              className="form-control"
            />
          </div>
          <div className="form-group col-6">
            <textarea
              className="form-control"
              name="contenido"
              placeholder="Escriba el contenido del nuevo artículo..."
              rows={15}
            ></textarea>
          </div>
          <div className="form-group col-6 categoria">
            <label for="categoria">Seleccione una categoría</label>
            <select
              className="form-control"
              id="categoria"
              defaultValue={"otro"}
            >
              <option value={"deportes"}>Deportes</option>
              <option value={"educación"}>Educación</option>
              <option value={"entretenimiento"}>Entretenimiento</option>
              <option value={"musica"}>Música</option>
              <option value={"otro"}>Otro</option>
              <option value={"política"}>Política</option>
              <option value={"religión"}>Religión</option>
            </select>
          </div>
          <div className="form-group col-6">
            <input type="file" className="form-control" id="adjImg" />
          </div>
          <div className="form-group col-6">
            <button className="form-control btn btn-success">
              Crear Artículo
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AbmArticulo;
