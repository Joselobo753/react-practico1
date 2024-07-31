import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Eje8 = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();
  const handleSubmit = () => {
    if (Object.keys(errors).length > 0) {
      Swal.fire({
        title: "Error",
        text: "Completar todos los datos",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Genial!!",
        text: "Completaste bien el formulario",

        imageUrl:
          "https://i.pinimg.com/736x/77/a5/66/77a566aa0c6c1e81ebec9a4ab2e864a1.jpg",
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: "cobayo sonriendo",
      });
    }
  };
  return (
    <div className="m-4 p-4 bg-dark text-white container">
      <form className="row g-3" onSubmit={onSubmitRHF(handleSubmit)}>
        <div className="col-md-6">
          <label htmlFor="inputNombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
            id="inputNombre"
            {...register("nombre", {
              required: "El campo es requerido",
              maxLength: 40,
              minLength: 3,
            })}
          />
          <div className="invalid-feedback">
            <span className="badge text-bg-danger">
              {errors.nombre?.message}
            </span>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputApellido" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className={`form-control ${errors.apellido ? "is-invalid" : ""}`}
            id="inputApellido"
            {...register("apellido", {
              required: "El campo es requerido",
              maxLength: 40,
              minLength: 3,
            })}
          />
          <div className="invalid-feedback">
            <span className="badge text-bg-danger">
              {errors.apellido?.message}
            </span>
          </div>
        </div>
        <hr />
        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="inputEmail4"
            {...register("email", {
              required: "El campo es requerido",
              maxLength: 40,
              minLength: 3,
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "ingrese un email valido",
              },
            })}
          />
          <div className="invalid-feedback">
            <span className="badge text-bg-danger">
              {errors.email?.message}
            </span>
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="inputDn1" className="form-label">
            N° de documento
          </label>
          <input
            type="number"
            className={`form-control ${errors.dni ? "is-invalid" : ""}`}
            id="inputDn1"
            {...register("dni", {
              required: "El campo es requerido",
              max: 99999999,
              min: 1000000,
            })}
          />
          <div className="invalid-feedback">
            <span className="badge text-bg-danger">{errors.dni?.message}</span>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Eje8;
