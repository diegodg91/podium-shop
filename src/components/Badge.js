import { useContext } from "react"
import { CartContext } from "./CartContext"

const Badge = () => {
    const {quantityCart} = useContext(CartContext)
return (
    <div className="absolute px-2 -mt-2 -mr-2 bg-indigo-500 rounded-full right-2 top-1 hover:bg-indigo-300">
        <span className="text-sm font-bold text-white">{quantityCart() || ""}</span>
    </div>
)
}

export default Badge