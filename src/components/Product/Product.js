import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


const Product = ({product, showResult}) => {
    const {name, img, price} = product;
    return (
        <div className='container'>
         <img src={img} alt="" />
         <h5>Model: {name}</h5> 
          <p>Price: {price}</p>
        <button  onClick={() => showResult(product)} className='cart-btn'><p>Add to cart</p> 
        <FontAwesomeIcon icon={faCartPlus} ></FontAwesomeIcon>
         </button>
         </div>
      
    );
    
};

export default Product;