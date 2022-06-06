import React from "react";
import { useNavigate } from "react-router-dom"

const LinkToCart = () => {
    const toCart = useNavigate()
    return(
        <button onClick={()=>toCart('/cart')} type="button" className="p-4 mt-5 text-sm font-bold text-white uppercase transition duration-300 ease-in-out bg-indigo-600 rounded-full hover:text-indigo-300">
        Ver mi carrito</button>
    )
}
export default LinkToCart