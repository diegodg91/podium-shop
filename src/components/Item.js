import React from "react"
import { useNavigate } from "react-router-dom"
const Item = ( {producto} ) => {
  
  const {image, tipo , nombre, precio} = producto
  const navegar = useNavigate();
    return (
       
          <div className="flex flex-col justify-center mx-auto bg-white shadow-xl w-72 rounded-2xl shadow-slate-300/60">
              
              <img src={image} className="object-cover object-center w-72 rounded-t-2xl" alt="card" />
              
              <div className="p-4">
                <small className="text-xs text-gray-500 uppercase">{tipo}</small>
                <h1 className="pb-2 text-2xl font-medium text-slate-400">{nombre}</h1>
                <p className="font-bold text-slate-600">${precio}</p>
              </div>

                <div className="p-4 mb-4 ">
                <button className="px-4 py-3 font-bold text-center text-white transition duration-300 ease-in-out bg-indigo-500 rounded-full hover:bg-indigo-600"
                onClick={()=>navegar(`/detalle/${producto.id}`)}>
                Ver Mas
                </button>
                </div>
              </div> 

        
    )
}

export default Item