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
            const result = cartList.filter(ele => ele.id !== (id))
            setCartList(result)
        }

        const clearP = () => {
            setCartList([]);
            setTotal([])
        }

        const isInCart = (product) => getProductId(product.id) ? true : false 

        const quantityCart = () =>{
            return cartList.reduce((acc, prod)=> acc += prod.cantidad,0)
        }

        const totalCart = () => {
            return cartList.reduce((acc, prod)=>acc += prod.cantidad * prod.precio, 0)
        }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clearP, isInCart, total, quantityCart, totalCart}}>
          {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider