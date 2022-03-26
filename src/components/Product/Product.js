import React from 'react';

const Product = (props) => {
    const {name, img, price} = props.product;
    return (
        <div>
        <img src={img} alt="" />
          <h5>{name}</h5> 
          <p>{price}</p>
        
        </div>
    );
};

export default Product;