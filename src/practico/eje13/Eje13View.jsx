import { useEffect, useState } from "react"
import Eje13Filter from "./Eje13Filter";
import Eje13Card from "./Eje13Card";
import Swal from "sweetalert2";
import Loading from "./Loading";
const Eje13View = () => {
    const [params, setParams] = useState()
    const [quotes, setQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const simposon_url = import.meta.env.VITE_eje13_url
    useEffect(()=>{
      const defaultParams = '?count=5'
    let queryParams = params ?? defaultParams;
     
  
      const fetchQuote = async () => {
        setIsLoading(true);
       
        try {
          const response = await fetch(`${simposon_url}${queryParams}`);
          
        const data = await response.json();
        setQuotes(data)
        if (data.length === 0) {
         
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Recuerda poner los nombres en ingles o tu personaje no es de los simpsons!",
          
          });
        }
      } catch (error) {
        console.error(error)
      }finally {
        setIsLoading(false);
      }}
      fetchQuote();
    },[params])
   
      
    return (
      <section className="container my-5">
        <div className="text-center">
        <h1>Personajes de simpsons y frases celebres</h1>
        <p>pero en ingles por que me pide la tarjeta el traductor</p>
        </div>
        <Eje13Filter params={params} setParams={setParams} />
        <div className="row my-3 d-flex justify-content-center">
        {isLoading ? (
          <Loading/>
        ) : (
          quotes.map((quote, index) => <Eje13Card quote={quote} key={index} />)
        )}
      </div>
      </section>
    );
  };
  

export default Eje13View
