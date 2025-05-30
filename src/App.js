import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className=''>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
