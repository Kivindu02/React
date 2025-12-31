import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import './OrdersPage.css';
import { OrdersGride } from './OrdersGride';




export function OrdersPage({ cart }) {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response =  await axios.get('/api/orders?expand=products')
      setOrders(response.data);
    }
    fetchData();
    
  }, [])
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGride orders={orders}/>
      </div>
    </>

  );
}