import PropTypes from "prop-types"
import { useState } from "react"
const Eje1 = (props) => {
  const [tres,setTres] = useState("")
  const eje3 = () =>{
    setTres("Esto no es un useState es magia")
  }
  return (
    <section>
    <h1>Hola mundo, {props.eje2} </h1>
    <p>{tres}</p>
    <button onClick={eje3}> click para magia</button>
    </section>
  )
}
Eje1.propTypes = {
  eje2: PropTypes.string.isRequired
}

export default Eje1