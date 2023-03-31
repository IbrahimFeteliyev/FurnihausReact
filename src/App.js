import './App.css';
import HeaderRes from './components/HeaderRes/HeaderRes';
import Footer from './components/Footer/Footer';
import { CartContext } from './context/MyContext';
import MyRouter from './router/MyRouter';
import { useState } from 'react';

function App() {
  const [cartCount, setCartCount] = useState(0)
  
  const data ={
    cartCount,
    setCartCount
  }
  return (
    <div>
        <CartContext.Provider value={data}>
        <HeaderRes/>
        <MyRouter/>
        <Footer/>
        </CartContext.Provider>
    </div>
  );  
}

export default App;
  