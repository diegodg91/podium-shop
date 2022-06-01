import React,{useState, useEffect} from "react"
import { getData } from "../mocks/ProductosApi"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})
    const [load, setLoad] = useState(false)
    const { id } = useParams()
  
    useEffect(()=>{
      setLoad(true)
      getData
      .then((res) => setDetail(res.find((ele) => ele.id === id)))
      .catch((error) => console.log(error))
      .finally(()=> setLoad(false))
  },[id])

    return(
        <>
        <div className="container mx-auto">
        <section className="grid grid-cols-12 gap-4 rows-1">
        
        {load ? <div className="col-start-7 p-5 mt-5 rounded-full w-28 h-28 outline-dashed outline-4 outline-indigo-500 animate-spin"></div>
        : 
        <ItemDetail detail={detail}/>}
        </section>
        </div>
        </>
    )
}

export default ItemDetailContainer