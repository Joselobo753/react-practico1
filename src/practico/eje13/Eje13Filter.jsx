import { useForm } from "react-hook-form";

const Eje13Filter = (props) => {
    let {params, setParams} = props
    
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit: onSubmitRHF,
      } = useForm();
      const handleSubmit = (data) => {
         const nombre = data.nombrePersonaje || ""
       const  numero = data.numPersonaje || 1
       params = `?count=${numero}&character=${nombre}`
       console.log(params)
        setParams(params)
        
       }
  return (
          <div className="  justify-content-between align-items-center" >
      <form  className="row" onSubmit={onSubmitRHF(handleSubmit)}>

        <div className="col-5">
        <fieldset className="form-floating ">
          <input
            type="text"
            className={`form-control ${
                errors.nombrePersonaje ? "is-invalid" : ""
              }`}
            id="textPersonaje"
            {...register("nombrePersonaje", {
                maxLength: 15,
               
              })}
          />
          <label htmlFor="textPersonaje">Nombre del personaje a buscar</label>
        </fieldset>
        </div>
        <div className=" col-5">
        <fieldset className="form-floating ">
          <input
            type="number"
            className={`form-control ${
                errors.numPersonaje ? "is-invalid" : ""
              }`}
            id="numPj"
            {...register("numPersonaje", {
                maxLength: 15,
               
              })}
          />
          <label htmlFor="numPj">Numero de respuestas</label>
        </fieldset>
        </div>
        <div className="col-2">

        <button className="btn btn-primary" type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
        </button>
        </div>
      </form>
    </div>
  );
};
export default Eje13Filter;

