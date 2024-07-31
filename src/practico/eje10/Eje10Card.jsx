const Eje10Card = ({index,pelicula,setPeliculas}) => {
    const borrar = (id) => {
        setPeliculas((pelicula) => pelicula.filter((pelicula)=> pelicula.id !==id ))
    }
  return (
    <div class="card col-3 border-1 border-primary rounded m-2" key={pelicula.id}>
  <div class="card-header">
    <h5>{index+1} Pelicula: {pelicula.nombre} </h5>
  </div>
  <div class="card-body">
    <h5 class="card-title">{pelicula.categoria} </h5>
    <p class="card-text"> {pelicula.detalle} </p>
    <button class="btn btn-danger flex-end" onClick={()=> borrar(pelicula.id)}>Borrar</button>
  </div>
</div>
  )
}
export default Eje10Card