import { useEffect, useState } from 'react';
import './App.css';
import Product from './components/Product/Product';

function App() {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
      fetch('product.json')
      .then(res => res.json())
      .then(data => setProduct(data))
    },[]);

    const showResult = (product) =>{
      const addCart = [...cart, product];
      setCart(addCart);
    };

      return (
          <div>
            <h2 className='headline'>Welcome to my laptop Shop</h2>
        <div className="product-container">
        <div className='main-content'>
        {
          products.map(product => <Product 
            key={product.id}
            product={product}
            showResult={showResult}
            ></Product>)
        }
      </div>
      <div className='select-item'>
        <h3>Your Product</h3>
         <h3>{cart.length}</h3>
        <button>CHOOSE 1 FOR ME</button>
        <br/><br/>
        <button>CHOOSE AGAIN</button>
      </div>
    </div>
    </div>
   
  );
}

export default App;

