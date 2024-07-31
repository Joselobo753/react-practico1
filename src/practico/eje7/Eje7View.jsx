import { useEffect, useState } from "react"
import Card7 from "./Card7"
const empleados = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJ19rSY6WQ-5Mr-2tSf4uLTolIYmiwzqZhA&s" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://www.rionegro.com.ar/wp-content/uploads/2021/02/cobaya-cesped_0.jpg" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://www.zotal.com/wp-content/uploads/2019/01/karlijnprot470534unsplash.jpg" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://www.zooplus.es/magazine/wp-content/uploads/2022/05/Como-tener-cobayas-en-exterior.jpg" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://i1.wp.com/enelveterinario.com/wp-content/uploads/2021/03/aspectocobayta_principal.jpg?ssl=1" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOJLJ9zVVy8aK2kJq3ALC6_uZCKaWm_AoQA&s" },
        { id: 7, fullName: "Gabriel Azubel", title: "Digital Strategist", department: "Marketing", pic: "https://i1.wp.com/todosobremascotas.com/wp-content/uploads/2017/10/Cobaya-Skinny.jpg?resize=512%2C300&ssl=1" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS4vMZ5Lqs4Tp_JPDo-Xnk0F_5IocqRt02mQ&s" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://madagascarmascotas.com/blog/wp-content/uploads/2014/06/cobayas-alicante.jpg" },
      ]
const Eje7View = () => {
    
      
  return (
    <section className="col-6 mb-4 justify-content-center align-items-center">
        {empleados.map((empleado)=>{
            return <Card7 empleado={empleado} key={empleado.id} />
        })}
    </section>
  )
}
export default Eje7View