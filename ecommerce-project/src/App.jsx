import axios from 'axios';
import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/Checkout/CheckoutPage';
import './App.css'
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import { NotFoundPage } from './pages/NotFoundPage';



function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data);
    }
    
    fetchAppData();  

  },[]);



  return (

    <Routes>
      <Route index element={<HomePage cart={cart}/>} />
      <Route path='checkout' element={<CheckoutPage cart={cart}/>} />
      <Route path='orders' element={<OrdersPage cart={cart}/>} />
      <Route path='tracking' element={<TrackingPage />} />
      <Route path="*" element={<NotFoundPage />} />

    </Routes>



  )
}

export default App
