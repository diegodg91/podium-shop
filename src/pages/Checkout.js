import React, { useContext } from 'react'
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import db from "../utils/firebaseConfig";
import { CartContext } from "../components/CartContext";
import { useNavigate } from 'react-router-dom'



const Checkout = () => {

    const [data, setData] = React.useState({})

    const [orderId, setOrderId] = React.useState(false)

    const {cartList, totalCart, clearCart} = useContext(CartContext);

    const navegar = useNavigate()

  
    const handleChange = (event) => {

        const { name, value } = event.target;
        setData({ ...data, [name]: value });

    }

    const createOrder = (event) => {
        event.preventDefault();
        const itemsFromDB = cartList.map(item =>({

            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            cantidad: item.cantidad

        }))

    

       let orden = {
        buyer:data,
        date: serverTimestamp(),
        total: totalCart(),
        items: itemsFromDB

       };

       const createOrderInFirestore = async () => {
        const newOrderRef = doc(collection(db, "ordenes"));
        await setDoc(newOrderRef, orden);
        return newOrderRef;

       }

    

       createOrderInFirestore()
        .then(res => setOrderId(res.id))
        .catch(error => console.log(error))


        cartList.forEach(async (item) => {

            const itemRef = doc(db, "productos", item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.cantidad) 

            })

        }) 

        clearCart();

    }

    return (

        <div className="container mx-auto sm:w-full md:w-1/4">

            {!orderId
            ?<form onSubmit={createOrder} className="px-8 pt-6 pb-8 mt-10 mb-4 bg-white rounded shadow-md">
                <h1 className='mb-2 text-xl font-bold uppercase text-slate-700'>Checkout ✅</h1>
                <p className='mb-4 text-sm text-slate-600'>Completa tus datos para finalizar la compra</p>
                <div className='mb-4'>
                <input required type="text" name="name" placeholder="Nombre" onChange={handleChange} className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                </div>
                
                <div className='mb-4'>
                <input required type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                </div>
                

                <div className='mb-4'>
                <input required type="phone" name="phone" placeholder="Telefono" onChange={handleChange} className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                </div>
               

                <div className='mt-6'>
                <input className='w-full p-3 font-bold text-white bg-green-400 rounded-full cursor-pointer hover:bg-green-600' type="submit" value="Finalizar compra"/>
                </div>

            </form>

            :<>
            <div className='flex flex-col justify-center mt-10'>
            <p className='text-lg font-bold text-center text-slate-700'>Muchas gracias por tu compra!</p>
            <p className='text-sm text-center font-regular text-slate-700'>Tu orden es: {orderId}</p>
            <button className='p-3 mt-4 font-semibold text-center uppercase bg-indigo-100 rounded-full hover:bg-indigo-200 text-slate-700' onClick={()=>navegar('/')}>Volver</button>
            </div>
            

            </>}

        </div>

    )

}



export default Checkout