const Eje9Card = ({ index,cita, setCitas }) => {
  const Borrar = (id) => {
    setCitas((cita) => cita.filter((cita) => cita.id !== id));
  };
  return (
    <div className="card col-3  border-1 border-primary rounded m-2" key={cita.id}>
        <h3>{index+1} Turno </h3>
        <h5>Mascota: {cita.nombreMascota} </h5>
        <p>Dueño: {cita.nombreDueño} </p>
        <div className="row">
            <div className="col-md-auto">
                <p>Hora del turno</p>
                <p>{cita.hora} </p>
            </div>
            <div className="col-md-auto">
                <p>Fecha:</p>
                <p>{cita.fecha} </p>
            </div>
        </div>
        <h5>Tipo de cita: {cita.selectCita} </h5>
        <p> <b> Detalle :</b> {cita.detalle} </p>
      <div className="py-2">
      <button
        type="button"
        className="btn btn-danger flex-end"
        onClick={() => Borrar(cita.id)}
      >
        Borrar
      </button>
      </div>
    </div>
  );
};
export default Eje9Card;
