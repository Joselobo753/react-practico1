
const CardEje6 = ({ color, setColores }) => {
  const Borrar = (id) => {
    setColores((prevColores) => prevColores.filter((color) => color.id !== id));
  };
 
  return (
    
      <div className="card col-3" key={color.id}>
        <div
          className="card-img-top my-2 "
          style={{ background: color.color, width: '100%', height: '100px', borderRadius:"15px" }}
        >
          <div className='box p-5 '></div>
        </div>
        <div className="card-body">
          <h5 className="card-title">Nombre:</h5>
          <p className="card-text">{color.nombre } </p>

          <button type="button" className='btn btn-danger flex-end' onClick={() => Borrar(color.id)}>
            Borrar
          </button>
        </div>
      </div>
    
  );
};
export default CardEje6;
