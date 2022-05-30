import React,{useState, useEffect} from "react"
import { getItem } from "../mocks/ProductosApi"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([])
    const [load, setLoad] = useState([false])
  
    useEffect(()=>{
      setLoad(true)
      getItem
      .then((res)=>setDetail(res))
      .catch((error) => console.log(error))
      .finally(()=> setLoad(false))
  }, [])
    return(
        <>
        <section className="grid grid-cols-12 gap-4 rows-1">
        
        {load ? <div className="rounded-full w-28 h-28 outline-dashed outline-4 outline-green-500 animate-spin"></div>
        : 
        <ItemDetail detail={detail}/>}
        </section>
        </>
    )
}

export default ItemDetailContainer