import { useForm } from "react-hook-form";
import { oobPelicula } from "./OobPelicula";

const Eje10 = (props) => {
  const { peliculas, setPeliculas } = props;
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();
  const handleSubmit = (data) => {
    const nuevaPelicula = new oobPelicula(
      data.nombrePelicula,
      data.detalle,
      data.selectCategoria
    );

    const nuevaLista = [...peliculas, nuevaPelicula];
    setPeliculas(nuevaLista);
    reset();
    console.log(data);
  };
  return (
    <div className="row align-items-center">
    <form className="col-md-6 "onSubmit={onSubmitRHF(handleSubmit)}>
      <div className="  mb-3">
        <fieldset className="form-floating ">
          <input
            type="text"
            className={`form-control ${
              errors.nombrePelicula ? "is-invalid" : ""
            }`}
            id="validatePelicula"
            placeholder=""
            {...register("nombrePelicula", {
              required: "El campo es requerido",
              maxLength: 40,
              minLength: 3,
            })}
          />
          <div className="invalid-feedback">
            <span className="badge text-bg-danger">
              {errors.nombrePelicula?.message}
            </span>
          </div>
          <label htmlFor="validatePelicula" className="form-label ">
            Nombre de la pelicula
          </label>
        </fieldset>
      </div>
      <div className=" mb-3">
        <label htmlFor="Categoria" className="form-label">
          Tipo de pelicula
        </label>
        <select
          className={`form-select ${
            errors.selectCategoria ? "is-invalid" : ""
          }`}
          id="Categoria"
          {...register("selectCategoria", {
            required: "El tipo de Categoria es obligatorio",
          })}
        >
          <option value="" className="bg-secondary">
            Seleccione
          </option>
          <option value="Comedia">Comedia</option>
          <option value="Drama">Drama</option>
          <option value="Infantil">Infantil</option>
          <option value="+18">+18</option>
        </select>
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">
            {errors.selectCategoria?.message}
          </span>
        </div>
      </div>
      <div className="form-floating  mb-3">
        <textarea
          className={`form-control ${errors.detalle ? "is-invalid" : ""}`}
          id="descripcion"
          placeholder="Comentarios del paciente"
       
          {...register("detalle", {
            required: "El comentario es obligatorio",
            minLength: {
              value: 4,
              message: "El comentario debe tener al menos 4 caracteres",
            },
            maxLength: {
              value: 200,
              message: "El comentario no puede exceder los 200 caracteres",
            },
          })}
          style={{ resize: "none" ,height: "100px"}}
        ></textarea>
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">
            {errors.detalle?.message}
          </span>
        </div>
        <label htmlFor="descripcion">Descripcion de la pelicula</label>
      </div>
      
      <div className="col-12 mb-3 text-end">
        <button className="btn btn-primary" type="submit">
          Cargar a sistema
        </button>
      </div>
    </form>

        <div className="col-md-6 mb-3">
          <img src="https://img.freepik.com/foto-gratis/vista-elementos-cine-3d_23-2150720822.jpg" alt="pochoclo" className="rounded"/>
        </div>
    </div>
  );
};
export default Eje10;
