import {createContext, useState} from "react";

export const CartContext = createContext();

    const CartContextProvider = ({children}) => {
        const [cartList, setCartList] = useState([]);
        const [total, setTotal] = useState(0);

        const getProductId = (id) =>cartList.find(ele=>ele.id === id) || null

        const addToCart = (detail, cantidad) => {
            const product = getProductId(detail.id)
            if(!product){
                detail.cantidad = cantidad;
                setCartList([...cartList, detail]);
            }else{
                if(product.cantidad + cantidad > product.stock)
                return false;
                product.cantidad += cantidad
            }

            setTotal(total + cantidad);
            return true

        }

        const removeItem = (id) => {
            const result = cartList.filter(ele => ele.id !== parseInt(id))
            setCartList(result)
        }

        const clearP = () => {
            setCartList([]);
            setTotal([])
        }

        const isInCart = (product) => getProductId(product.id) ? true : false 


    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clearP, isInCart}}>
          {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider