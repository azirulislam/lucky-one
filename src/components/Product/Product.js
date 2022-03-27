import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name, img, price} = props.product;
    return (
        <div className='container'>
         <img src={img} alt="" />
         <h5>Model: {name}</h5> 
          <p>Price: {price}</p>
        <button  onClick={() => props.showResult(props.product)} className='cart-btn'><p>Add to cart</p> 
        <FontAwesomeIcon icon={faCartPlus} ></FontAwesomeIcon>
         </button>
         </div>
    );
    
};

export default Product;