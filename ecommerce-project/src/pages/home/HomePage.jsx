import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import './HomePage.css';
import { ProductGrid } from './ProductGrid';


export function HomePage({cart}) {

  const [products, setProduct] = useState([]);
  

  useEffect(()=>{
    axios.get('/api/products').then((response)=>{
      setProduct(response.data);
    });

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