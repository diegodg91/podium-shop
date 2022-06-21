import React,{useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { firestoreFetchOne } from "../utils/firestoreFetch";

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})
    const [load, setLoad] = useState(false)
    const { id } = useParams()
  
    useEffect(()=>{
      setLoad(true)
      firestoreFetchOne(id)
      .then((res) => setDetail(res))
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