import './App.css';
import { StockForm } from './components/StockForm/stockForm';
import { Routes, Route } from 'react-router-dom';
import { StockInfo } from './components/StockInfo/stockInfo';

function App() {
  return (

    <Routes>
      <Route path="/" element={<StockForm />} />
      <Route path="/stocks" element={<StockInfo />} />
    </Routes>
  )
}

export default App;
