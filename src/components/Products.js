import React from 'react';

function Product(props) {
    const {product} = props;
    return (
        <div>
            <img src={product.image} alt={product.name} className="small"/>
            <h3> {product.name} </h3>
            <div>{product.price}zł</div>
            <button > Add to cart </button>
        </div>
    );
}

export default Product;