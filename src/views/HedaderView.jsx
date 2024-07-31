import { useEffect, useState } from "react";
import Clock from "react-clock"
import 'react-clock/dist/Clock.css';
const HedaderView = () => {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <nav className="navbar bg-success-subtle">
  <div className="container-fluid bg-success-subtle">
          <img src="../../img/guinea-pig-hamster-animals-by-Vexels.svg" alt="Logo" width={"100px"} height={"100px"} className="d-inline-block align-text-top"></img>
          
    <Clock value={value}/>
    <a className="navbar-brand " href="#">
       Jose A. Lobo
    </a>
  
  </div>
</nav>
  )
}
export default HedaderView 