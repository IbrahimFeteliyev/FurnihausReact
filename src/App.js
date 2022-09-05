import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import MyRouter from './router/MyRouter';

function App() {
  return (
    <div>
        <Header/>
         <MyRouter/>
        <Footer/>
    </div>
  );
}

export default App;
