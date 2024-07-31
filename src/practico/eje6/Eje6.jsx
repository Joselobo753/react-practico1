import { useRef } from "react"
import { OobColor } from "./OobColor";

const Eje6 = (props) => {
  const { Colores, setColores } = props;

  const $inputText = useRef();
  const $inputColor = useRef();

  const Guardar = (e) => {
    e.preventDefault();
    const nombre = $inputText.current.value;
    const color = $inputColor.current.value;
    const nuevoColor = new OobColor(nombre, color);
    const nuevaLista = [...Colores, nuevoColor];
    setColores(nuevaLista);
    localStorage.setItem("Colores",JSON.stringify(nuevaLista))
    alert("color guardado");
    $inputColor.current.value = "";
    $inputText.current.value = "";
  };
  return (
    <>
      <div>
        <h3>Administrar Colores</h3>
      </div>
      <form>
        <fieldset>
          <div>
            <label htmlFor="" className="form-label">
              <input type="text" ref={$inputText} className="form-control" required/>
            </label>
          </div>
          <label htmlFor="exampleColorInput" className="form-label">
            Color picker
          </label>
          <input
            type="color"
            className="form-control form-control-color"
            title="Choose your color"
            ref={$inputColor}
          required/>
        </fieldset>
        <button onClick={Guardar} className="btn btn-primary my-2">
          cargar
        </button>
      </form>
      
    </>
  );
};
export default Eje6;