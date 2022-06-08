import React from 'react';
import './App.css';
import {Toaster} from 'react-hot-toast';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider  from './components/CartContext';
import Home from './pages/Home';
import Cart from './components/Cart';


const App = () => {
  return (
    <CartContextProvider>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/productos' element={<ItemListContainer/>}/>
          <Route path='/categoria/:tipo' element={<ItemListContainer/>}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>    
        </Routes>
        <Toaster/>
        </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
