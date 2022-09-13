import './App.css';
import Header from './components/Header/Header';
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
        <Header/>
        <MyRouter/>
        <Footer/>
        </CartContext.Provider>
    </div>
  );
}

export default App;
