import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, price} = props.product;
    return (
        <div className='container'>
         <img src={img} alt="" />
         <h5>{name}</h5> 
          <p>{price}</p>

        
        </div>
    );
};

export default Product;