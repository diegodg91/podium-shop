import { useContext } from "react";
import { CartContext } from "./CartContext";
import ItemInCart from "./ItemInCart";
import { useNavigate } from "react-router-dom";


const Cart = () => {


const {cartList, totalCart} = useContext(CartContext)
const back = useNavigate()

    return(
        <>
            
        <div className="container mx-auto">
        {!cartList.length ?
        <div>
        <p className="font-semibold text-center uppercase text-slate-700">carrito vacio</p>
        <button onClick={()=>back('/productos')} type="button" className="px-2 py-3 text-sm font-medium text-gray-600 uppercase transition duration-300 ease-in-out hover:text-indigo-300">Ir a productos</button>
        </div>
        :
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
                            
                            cartList.map((ele) => 
                            <ItemInCart key={ele.id} nombre={ele.nombre} image={ele.image} precio={ele.precio} cantidad={ele.cantidad} id={ele.id} />)
                            
                        } 
                        </tbody>
                </table>
                        
                        <div className="flex justify-between w-full gap-10 p-10 mt-6 bg-indigo-100 rounded shadow-lg">
                            <p className="text-2xl font-bold uppercase text-slate-600">Monto Total: ${totalCart()}</p>
                            <button type="button" className="w-64 font-bold text-white bg-green-400 rounded-full hover:bg-green-600">Finalizar Compra</button>
                        </div>
                </div>
            </div>}
        </div>
        
        </>
    );
}

export default Cart