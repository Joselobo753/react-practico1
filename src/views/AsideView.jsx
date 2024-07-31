import { Link } from "react-router-dom";
import "./styles/commons.css"
const AsideView = () => {
  return (
    <div>
      <button
        className="btn btn-success position-fixed bottom-0 end-0 m-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        Abrir trabajos
      </button>

      <div
        className="offcanvas offcanvas-start "
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header bg-secundary">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Trabajos
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body bg-dark text-white">
          <div>
          <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/eje1">
                  Ejercicio 1
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/eje4">
                  Ejercicio 4
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/eje5">
                  Ejercicio 5
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/eje6">
                  Ejercicio 6
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/eje7">
                  Ejercicio 7
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/eje8">
                  Ejercicio 8
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/eje9">
                  Ejercicio 9
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/eje10">
                  Ejercicio 10
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/eje11">
                  Ejercicio 11 
                </Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/eje12">
                  Ejercicio 12
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/eje13">
                  Ejercicio 13
                </Link>
              </li>
            </ul>
          </div>
          
            
         
        </div>
      </div>
      
    </div>
  );
}
export default AsideView


/* <a to="/contactos"><div className="tarjeta"><h3>Eje2</h3></div></a>
        <div className="tarjeta"><h3>Eje2</h3></div>    
        <div className="tarjeta"><h3>Eje2</h3></div>    
        <div className="tarjeta"><h3>Eje2</h3></div>    
        <div className="tarjeta"><h3>Eje2</h3></div>    
        <div className="tarjeta"><h3>Eje2</h3></div>    
       
    </div>*/