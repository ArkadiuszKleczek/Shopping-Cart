import React from 'react';

function Product(props) {
    const {product, onAdd} = props;

    return (
        <div>
            <img src={product.image} alt={product.name} className="small"/>
            <h3> {product.name} </h3>
            <h3> {product.price} zł </h3>
            <button onClick={() => onAdd(product)} > Add to cart </button>
        </div>
    );
}

export default Product;