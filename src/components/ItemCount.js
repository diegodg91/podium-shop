import { useState } from "react";
    
const ItemCount = () => {

    const [cantidad, setCantidad] = useState(0);
          
      const add = (stock) => {
        stock = 10;
        if(cantidad < stock) setCantidad(cantidad+1)
        };

      const quit = () => {
       if(cantidad >= 1)  setCantidad(cantidad-1)
        };

        const onAdd = () => {
            cantidad > 0 ? alert(`${cantidad} productos añadidos`) : alert('no hay productos añadidos')
        }

    return(
        <>
        <div className="container mx-auto">
        <div className="flex flex-row justify-between p-6 mt-4 text-center border-2 border-gray-400 border-solid w-72">
            <button onClick={add} type="button" className="w-10 h-10 text-lg font-bold text-white bg-green-600 rounded-full">+</button>
            <p className="text-lg font-bold text-center text-gray-600 basis-1/2">Cantidad: {cantidad}</p>
            <button onClick={quit} type="button" className="w-10 h-10 text-lg font-bold text-white bg-red-600 rounded-full">-</button>
        </div>
          <div className="flex flex-row justify-between mt-4">
          <button onClick={onAdd} type="button" className="p-3 font-semibold text-center text-white bg-gray-600 text-md">Agregar al carrito</button>
          </div>
        </div>
            
        </>
    )
}

export default ItemCount