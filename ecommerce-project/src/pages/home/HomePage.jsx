import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import './HomePage.css';
import { ProductGrid } from './ProductGrid';


export function HomePage({cart}) {

  const [products, setProduct] = useState([]);
  

  useEffect(()=>{
    const getHomeData = async () => {
      const response = await axios.get('/api/products')
      setProduct(response.data);
    }
    
    getHomeData();

  },[])
  

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
      <title>Ecommerce Project</title>

      <Header cart={cart}/>

      <div className="home-page">
        <ProductGrid products={products}/>
      </div>

    </>

  );
}