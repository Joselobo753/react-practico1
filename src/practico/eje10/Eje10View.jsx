import { useEffect, useState } from "react"
import Eje10 from "./Eje10"
import Eje10Card from "./Eje10Card"

const peliculaLS = JSON.parse(localStorage.getItem("peliculas")) || []
const Eje10View = () => {
    const [peliculas, setPeliculas] = useState(peliculaLS)
    useEffect(()=>{
        localStorage.setItem("peliculas",JSON.stringify(peliculas))
    } , [peliculas])
    
  return (
    <section>
    <div className="container border  border-1 rounded my-2">
      <h1 className="py-3 text-center">Administador de peliculas</h1>
      
    
      <Eje10 peliculas={peliculas} setPeliculas={setPeliculas} />
      </div>
      <hr className="border border-success border-3 opacity-75"/>
      <div className="row mx-5">
      {peliculas.map((pelicula,index) => {
      return ( <Eje10Card index={index} pelicula={pelicula} setPeliculas={setPeliculas}/>)
      })} </div>
    </section>
  )
}
export default Eje10View