import { useEffect, useState } from 'react';
import './App.css';
import Product from './components/Product/Product';

function App() {
    const [products, setProduct] = useState([]);

    useEffect( () => {
      fetch('product.json')
      .then(res => res.json())
      .then(data => setProduct(data))
    },[]);

      return (
    <div className="App">
      <h2 className='header'>Welcome to my laptop Shop</h2>
      <div className="product-container">
        {
          products.map(product => <Product 
            key={product.id}
            product={product}
            ></Product>)
        }
      </div>
    </div>
  );
}

export default App;
