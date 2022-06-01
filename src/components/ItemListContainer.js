import React,{useState, useEffect} from "react"
import ItemList from "./ItemList"
import { getData } from "../mocks/ProductosApi"
import { useParams } from "react-router-dom"
const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])
  const [load, setLoad] = useState([false])
  const {tipo} = useParams()

  useEffect(()=>{
    setLoad(true)
    getData
    .then((res)=>{
        if(!tipo){
            setProductos(res) 
        }else{
            setProductos((res)=> res.filter((prod) => prod.tipo === tipo))
        }
    })
    .catch((error) => console.log(error))
    .finally(()=> setLoad(false))
}, [tipo])

    return(
        <>
        <div className="container mx-auto">
        <h3 className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">{greeting}</h3>
        </div>
        

        <div>
            {load ? 
            <div className="container flex justify-center mx-auto mt-5">
            <div className="rounded-full w-28 h-28 outline-dashed outline-4 outline-indigo-500 animate-spin"></div>
            </div>
             : 
             <ItemList productos ={productos}/>}
        </div>
        </>
          
         
       
    )
}

export default ItemListContainer;