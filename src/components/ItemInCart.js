import { useContext } from "react";
import { CartContext } from "./CartContext";
const ItemInCart = (ele) => {
    const {removeItem} = useContext(CartContext)
    return(
        
        <tr>
                            <td className="px-6 py-12 border border-indigo-600">
                                <div className="flex items-center justify-center gap-2">
                                <img src={ele.image} alt="pro" className="justify-center w-20 h-auto rounded-full"/>
                                <p className="font-semibold text-slate-800">{ele.nombre}</p>
                                </div>
                            </td>
                            <td className="px-6 py-12 font-bold border border-indigo-600 text-slate-800">$ {ele.precio}</td>
                            <td className="px-6 py-12 font-bold border border-indigo-600 text-slate-800">{ele.cantidad}</td>
                            <td className="px-6 py-12 border border-indigo-600">
                            <button onClick={removeItem} type="button" className="w-8 h-8 text-lg font-bold text-white bg-red-300 rounded-full hover:bg-red-500">-</button>
                            </td>
                            
                            </tr>
    )
}

export default ItemInCart