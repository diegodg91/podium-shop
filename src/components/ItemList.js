import React from "react";
import Item from "./Item"


const ItemList = ({productos}) =>{
    return(
        <>
        <div className="container grid grid-cols-3 gap-4 pt-5 mx-auto">
            {productos.map((producto)=><Item key={producto.id} producto={producto}/>)}
        </div>
        </>
    );
}

export default ItemList