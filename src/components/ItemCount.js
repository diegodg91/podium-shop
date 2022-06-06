import { useState } from "react";
    
const ItemCount = ({stock}) => {

      const [cantidad, setCantidad] = useState(0);
          
      const add = () => {
        
        if(cantidad < stock) setCantidad(cantidad+1)
        };

      const quit = () => {
       if(cantidad >= 1)  setCantidad(cantidad-1)
        };

        const onAdd = () => {
            cantidad > 0 ? alert(`${cantidad} productos añadidos`) : alert('no hay productos añadidos');
            setCantidad()
        }

    return(
        <>
        <div className="container mx-auto">
        <div className="flex flex-row justify-between p-6 mt-4 text-center border-2 border-gray-400 border-solid w-72">
            <button onClick={add} type="button" className="w-10 h-10 text-lg font-bold text-white bg-gray-400 rounded-full">+</button>
            <p className="text-lg font-bold text-center text-gray-600 basis-1/2">Cantidad: {cantidad}</p>
            <button onClick={quit} type="button" className="w-10 h-10 text-lg font-bold text-white bg-gray-400 rounded-full">-</button>
        </div>
          <div className="flex flex-row justify-between mt-4">
          <button onClick={onAdd} type="button" className="px-4 py-3 font-bold text-center text-white transition duration-300 ease-in-out bg-indigo-500 rounded-full hover:bg-indigo-600">
           Agregar Producto</button>
        
          </div>
        </div>
            
        </>
    )
}

export default ItemCount