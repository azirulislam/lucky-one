import React from 'react';

const Product = (props) => {
    const {name, img, price} = props.Product;
    return (
        <div>
           <img src={img} alt="" />
        </div>
    );
};

export default Product;