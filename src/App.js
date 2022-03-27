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
            <div className='card'>
            <h3>How react works</h3>
            <p>React is a unidirectional Javascript library.it works with virtual DOM.React send data from parent to child.The JSX gets converted to react.creatElement function calls.The parent component send data to child via props.</p>

            <h3>props vs state</h3>
            <p>State use in usually parent component to store data.Props is use as a parameter in child component.State stored data use in parent component and then send data in props.Props data use in child component then it render in UI.State is a function own local scope but props are a parameter.</p>
         </div>
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
         <div>
           {
             cart.map(item =>(
               <h5>{item.name}</h5>
             ))
           }
         </div>
        <button>CHOOSE 1 FOR ME</button>
        <br/><br/>
        <button>CHOOSE AGAIN</button>
      </div>
    </div>
    </div>
   
  );
}

export default App;

