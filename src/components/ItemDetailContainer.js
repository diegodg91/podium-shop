import React,{useState, useEffect} from "react"
import { getData } from "../mocks/ProductosApi"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})
    const [load, setLoad] = useState(false)
  
    useEffect(()=>{
      setLoad(true)
      getData
      .then((res)=>setDetail(res[2]))
      .catch((error) => console.log(error))
      .finally(()=> setLoad(false))
  }, [])

    return(
        <>
        <div className="container mx-auto">
        <section className="grid grid-cols-12 gap-4 rows-1">
        
        {load ? <div className="col-start-7 mt-5 p-5 rounded-full w-28 h-28 outline-dashed outline-4 outline-indigo-500 animate-spin"></div>
        : 
        <ItemDetail detail={detail}/>}
        </section>
        </div>
        </>
    )
}

export default ItemDetailContainer