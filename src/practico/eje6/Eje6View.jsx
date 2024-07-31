import { useEffect, useState } from "react"
import Eje6 from "./Eje6"
import CardEje6 from "./CardEje6"
const coloresLS = JSON.parse(localStorage.getItem("Colores")) || []

const Eje6View = () => {
    const [Colores,setColores] = useState(coloresLS)
    useEffect(() => {
      localStorage.setItem("Colores", JSON.stringify(Colores))
      
  }, [Colores])

  return (
    <section className="container">
    <div className="p-2">
        
     
      < Eje6 Colores={Colores} setColores={setColores} />
      </div>
      <h1>Colores guardados</h1>
      <hr />
      <section className="row gap-4 p-1 ">
     {Colores.map((color) => {
      return ( <CardEje6 key={color.id} color={color} setColores={setColores}/>)
      })} </section>
    </section >
  )
}
export default Eje6View