import './App.css';
import { useState } from "react";

//import { gamesDatafromApi } from './utils/api';
import Navbar from './component/navbar/navbar';
import Home from './component/home/home';
import { cartContext } from './component/cartContext';
import Cart from './component/cart/cart';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CheckOut from './component/checkout/checkout';
import OrderSuccess from './component/checkout/payment';

function App() {
  const [gameCart, setGameCart] = useState([])
  const [cartItem, setCartItem] = useState([])
  console.log(gameCart)
  console.log(cartItem)
  return (
    <div>
      <cartContext.Provider value={{ gameCart, setGameCart, cartItem, setCartItem }}>
        <BrowserRouter>
       <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/success' element={<OrderSuccess />} />
          </Routes>
        </BrowserRouter>
      </cartContext.Provider>

    </div>

  );
}

export default App;