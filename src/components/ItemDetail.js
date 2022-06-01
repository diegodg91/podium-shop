import React from "react"
import ItemCount from "./ItemCount"
import { useNavigate } from "react-router-dom"

const ItemDetail = ({detail}) => {
   const {id,image, nombre, precio} = detail
   const volver = useNavigate()
    return(
        
        <>
            <div className="col-span-4 p-4 hover:drop-shadow-xl">
            
                <img className="w-full rounded-lg"
                    src={image} alt="producto"/>
            </div>

            <div className="col-span-8 p-4">
                <h3 className="text-2xl font-medium uppercase">id:{id} {nombre}</h3>
                <h5 className="text-2xl font-medium uppercase text-slate-600">${precio}</h5>
                <p className="mt-4 leading-relaxed">Si hay un sabor perfecto para un gel, es el Salted Caramel. El dulce e
                    indulgente sabor
                    a caramelo se derrite en tu boca, para complementarse con la proporción justa de sal, como para
                    lograr un resultado interesante. Con la misma consistencia que el caramelo, no te vamos a juzgar si
                    lo usas para agregarlo en tu próximo helado.</p>
                <ItemCount/>
                <button onClick={()=>volver('/productos')} type="button" className="px-2 py-3 text-sm font-medium text-gray-600 uppercase transition duration-300 ease-in-out hover:text-indigo-300">Volver</button>
            </div>
        </>
    )
}
export default ItemDetail