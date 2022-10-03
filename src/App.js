import './App.css';
import Header from './components/Header';
import Fruits from './components/Fruits';
import { Routes, Route } from 'react-router-dom';
import FruitDetail from './components/Details';



function App() {



  return (
    <div>
      <Routes>
        <Route path="Details" element={<FruitDetail />} />
        <Route path='/' element={<Header />} />
      </Routes>
    </div>
  )
}

export default App;
