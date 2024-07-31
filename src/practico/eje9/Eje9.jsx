import { useForm } from "react-hook-form";
import { OobCita } from "./OobCita";


const Eje9 = (props) => {
  const {citas, setCitas} = props
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();
  const handleSubmit = (datos) => {
    const nuevaCita = new OobCita(
      datos.nombreMascota,
      datos.nombreDueño,
      datos.fecha,
      datos.hora,
      datos.selectCita,
      datos.detalle
    );

    
    const nuevaLista = [... citas , nuevaCita];
    setCitas(nuevaLista);
    reset();
  };
  return (
    
        <form className="row g-3 py-3" onSubmit={onSubmitRHF(handleSubmit)}>
          
          <div className=" col-md-6">
            <fieldset className="form-floating ">
            <input
              type="text"
              className={`form-control ${
                errors.nombreMascota ? "is-invalid" : ""
              }`}
              id="validateMascota"
              placeholder=""
              {...register("nombreMascota", {
                required: "El campo es requerido",
                maxLength: 40,
                minLength: 3,
              })}
            />
            <div className="invalid-feedback">
              <span className="badge text-bg-danger">
                {errors.nombreMascota?.message}
              </span>
            </div>
            <label htmlFor="validateMascota" className="form-label ">
              Nombre de la mascota
            </label>
            </fieldset>
            </div>
            <div className=" form-floating col-md-6">
            <input
              type="text"
              className={`form-control ${
                errors.nombreDueño ? "is-invalid" : ""
              }`}
              id="validateDueño"
              placeholder=""
              {...register("nombreDueño", {
                required: "El campo es requerido",
                maxLength: 40,
                minLength: 3,
              })}
            />
            <div className="invalid-feedback">
              <span className="badge text-bg-danger">
                {errors.nombreDueño?.message}
              </span>
            </div>
            <label htmlFor="validateDueño" className="form-label ">
              Nombre del dueño
            </label>
          </div>

          <div className="col-md-5">
            <label htmlFor="validateFecha" className="form-label ">
              Fecha
            </label>
            <input
              type="date"
              className="form-control"
              id="validateFecha"
              placeholder=""
              {...register('fecha', { 
                required: 'La fecha es obligatoria', 
                validate: value => {
                  const date = new Date(value);
                  const today = new Date();
                  today.setHours(0, 0, 0, 0); 
                  if (date < today) {
                    return 'La fecha no puede ser pasada';
                  }
                  return true;
                }
              })} 
            />
            <div className="invalid-feedback">
              <span className="badge text-bg-danger">
                {errors.fecha?.message}
              </span>
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="hora" className="form-label">
              Hora
            </label>
            <input
              type="time"
              className={`form-control ${errors.hora ? "is-invalid" : ""}`}
              id="hora"
              {...register("hora", {
                required: "La hora es obligatoria",
                validate: (value) => {
                  const [hours, minutes] = value.split(":").map(Number);
                  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
                    return "Hora no válida";
                  }
                  return true;
                },
              })}
            />
            <div className="invalid-feedback">
              <span className="badge text-bg-danger">
                {errors.hora?.message}
              </span>
            </div>
          
          </div>
          <div className="col-md-3">
        <label htmlFor="cita" className="form-label">Tipo de cita</label>
        <select
          className={`form-select ${errors.selectCita ? "is-invalid" : ""}`}
          id="cita"
          {...register('selectCita', {
            required: 'El tipo de cita es obligatorio'
          })}
        >
          <option value="" className="bg-secondary">Seleccione</option>
          <option value="Consulta">Consulta</option>
          <option value="Corte de pelo">Corte de pelo</option>
          <option value="Castracion">Castracion</option>
          <option value="Urgencia">Urgencia</option>
        </select>
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">
            {errors.selectCita?.message}
          </span>
        </div>
      </div>
          <div className="form-floating col-md-12">
            <textarea
              className={`form-control ${errors.detalle ? "is-invalid" : ""}`}
              id="comment"
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
              style={{ resize: "none" }}
            ></textarea>
            <div className="invalid-feedback">
              <span className="badge text-bg-danger">
                {errors.detalle?.message}
              </span>
            </div>
            <label htmlFor="comment">Comentarios del paciente</label>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Cargar a sistema
            </button>
          </div>
        </form>
     
  );
};
export default Eje9;
