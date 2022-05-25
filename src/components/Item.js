import React from "react"
const Item = ( {producto} ) => {
  const {image, tipo , nombre, precio} = producto
    return (
       
          <div className="flex flex-col justify-center mx-auto bg-white shadow-xl w-72 rounded-2xl shadow-slate-300/60">
              
              <img src={image} className="object-cover object-center w-72 rounded-t-2xl" alt="card" />
              
              <div className="p-4">
                <small className="text-xs text-gray-500 uppercase">{tipo}</small>
                <h1 className="pb-2 text-2xl font-medium text-slate-400">{nombre}</h1>
                <p className="font-bold text-slate-600">${precio}</p>
              </div>

                <div className="p-4 mb-4 ">
                <a href="b" class="bg-indigo-500 text-center rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-indigo-600">
                Comprar
                </a>
                </div>
              </div> 

        
    )
}

export default Item