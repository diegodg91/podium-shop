import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import ItemInCart from "./ItemInCart";


const Cart = () => {
const [total] = useState(0);

const render = useContext(CartContext)
const clearP = useContext(CartContext)

    return(
        <>
            
        <div className="container mx-auto">
      
            <div className="flex justify-center h-screen gap-4 rounded-lg">
                <div className="w-full p-4">
                <h1 className="text-2xl font-bold uppercase text-slate-800">carrito</h1>
         
                <table className="w-full mt-6 text-center shadow-lg table-auto">
                        <thead>
                            <tr>
                            <th  className="text-white uppercase bg-indigo-600 border border-indigo-600">Producto</th>
                            <th  className="text-white uppercase bg-indigo-600 border border-indigo-600">Precio Unidad</th>
                            <th  className="text-white uppercase bg-indigo-600 border border-indigo-600">Cantidad</th>
                            <th  className="text-white uppercase bg-indigo-600 border border-indigo-600">Quitar</th>
                            </tr>
                        </thead>
               
                        <tbody>
                        {
                            render.cartList.length === 0 ? <p className="font-semibold text-center uppercase text-slate-700">carrito vacio</p>
                            :render.cartList.map((ele) => 
                            <ItemInCart key={ele.id} nombre={ele.nombre} image={ele.image} precio={ele.precio} cantidad={ele.cantidad}/>)
                            
                        }
                            
                            
                            
                            
                        </tbody>
                </table>
                        
                        <div className="flex justify-between w-full gap-10 p-10 mt-6 bg-indigo-100 rounded">
                            <p className="text-3xl font-bold uppercase text-slate-600">Total:{total}</p>
                            <button onClick={clearP} type="button" className="w-64 font-bold text-white bg-red-400 rounded-full hover:bg-red-600">vaciar carrito</button>
                        </div>
                </div>
            </div>
        </div>
        {/* <button onClick={clearP} type="button" className="w-64 p-2 font-semibold uppercase bg-red-400 rounded">borrar</button> */}
        </>
    );
}

export default Cart