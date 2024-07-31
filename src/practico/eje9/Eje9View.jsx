import { useEffect, useState } from "react"
import Eje9 from "./Eje9"
import Eje9Card from "./Eje9Card"

const citasLS = JSON.parse(localStorage.getItem("citas")) || []

const Eje9View = () => {
    const [citas, setCitas] = useState(citasLS)
    useEffect(()=>{
        localStorage.setItem("citas",JSON.stringify(citas))
    } , [citas])
    
  return (
    <section>
    <div className="container border  border-1 rounded">
      <h1 className="py-3">Administador de pacientes de veterinaria</h1>
      <h3 className="text-end">Llene el formulario para crear una cita</h3>
      <div className="py-3"></div>
      <Eje9 citas={citas} setCitas={setCitas} />
      </div>
      <hr className="border border-success border-3 opacity-75"/>
      <div className="row">
      {citas.map((cita,index) => {
      return ( <Eje9Card index={index} cita={cita} setCitas={setCitas}/>)
      })} </div>
    </section>
  )
}
export default Eje9View