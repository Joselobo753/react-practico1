import PropTypes from "prop-types"
const Eje1 = (props) => {
  return (
    <h1>Hola mundo, {props.eje2} </h1>
  )
}
Eje1.propTypes = {
  eje2: PropTypes.string.isRequired
}

export default Eje1