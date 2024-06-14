import { useRef, useState } from "react"

const Eje4 = () => {
    const [Todos,setTodos] = useState([])
    const $input = useRef()
    const handleNueTarea = () =>{
        const nuevotodos = $input.current.value
        if (nuevotodos.trim()) {
         
        const nuevoarreglo = [... Todos,nuevotodos]
        setTodos(nuevoarreglo)
        $input.current.value = ""   
        }
        
    }
    const borrar = (index) =>{
        const nuevoArreglo = [...Todos];
        nuevoArreglo.splice(index, 1);
        setTodos(nuevoArreglo);
        }
  return (
    <section className="container bg-dark text-white p-3">
      <div className="">
        <h2>Bienvenido ala lista de tareas</h2>
        <p>Porfavor ingrese una tarea</p>
        
        <fieldset>
          <label htmlFor="" className="form-label">
            <input type="text" ref={$input}  className="form-control"/>
          </label>
        </fieldset>
        <button onClick={handleNueTarea} className="btn btn-primary my-2">
          cargar
        </button>
      </div>
      <ul className="list-group ">
        {Todos.map((todo, index) => {
          return (
            <div key={index} className="col-md-6">
              <div className="input-group mb-3">
                <span className="input-group-text bg-success svg-backgroundF">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-clipboard2-check svg-frist"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z"></path>
                    <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"></path>
                    <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"></path>
                  </svg>
                </span>
                <li key={index} className="list-group-item  flex-fill">
                  {todo}
                </li>
                <span className="input-group-text bg-danger " onClick={()=>borrar(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                </span>
              </div>
            </div>
          );
        })}
      </ul>
    </section>
  );
}
export default Eje4