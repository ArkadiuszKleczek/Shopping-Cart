import React from "react";
import Product from "./Products";



export default  function Main(props) {
    const {products, onAdd} = props;

    return (
      <main className="block col-2">
          <h1 className="align">Products</h1>
          <hr/>
          <br/>
          <div className="row">
              {products.map((product) => (
                  <Product key={product.id} product={product} onAdd={onAdd}> </Product>))}
          </div>
      </main>
    )
}
