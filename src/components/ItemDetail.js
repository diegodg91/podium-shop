import ItemCount from "./ItemCount"
import LinkToCart from "./LinkToCart"
import toast from "react-hot-toast"
import { useState} from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "./CartContext"
import React, { useContext } from "react"

const ItemDetail = ({detail}) => {  

   const {id, image, nombre, precio, stock, descripcion} = detail

   const [cantidad, setCantidad] = useState(1);

   const [compra, setCompra] = useState(false)

//    CONTEXT
    const {addToCart} = useContext(CartContext)

   const onAdd = () => {
    setCompra(true);
    toast.success(`¡${cantidad} Productos Agregados!`)
    addToCart(detail, cantidad);
}

   const volver = useNavigate()
    return(
        
        <>
            <div className="col-span-4 p-4 hover:drop-shadow-xl">
            
                <img className="w-full rounded-lg"
                    src={image} alt="producto"/>
            </div>

            <div className="col-span-8 p-4">
                <h3 className="text-4xl font-bold text-indigo-600 uppercase">{nombre}</h3>
                <h5 className="mt-2 text-3xl font-bold uppercase text-slate-600">${precio}</h5>
                <p className="mt-4 leading-relaxed">{descripcion}</p>
                <p className="mt-4 text-lg font-semibold text-green-500 uppercase">stock disponible: <span className="text-xl font-bold text-slate-400">{stock} unidades</span></p>
                
                
                 {
                    !compra
                     ? <ItemCount idItem={id} stock={stock} cantidad={cantidad} setCantidad={setCantidad} onAdd={onAdd} />
                     : <LinkToCart/>
                 }
                
                <button onClick={()=>volver('/productos')} type="button" className="px-2 py-3 text-sm font-medium text-gray-600 uppercase transition duration-300 ease-in-out hover:text-indigo-300">Volver</button>
            </div>
        </>
    )
}
export default ItemDetail