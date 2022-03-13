import React from "react";

export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((ele, idx) => ele + idx.qty * idx.price, 0);
    const taxPrice = itemsPrice * 0.23;
    const shippingPrice = itemsPrice > 800 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <aside style={{padding: '0 40%'}} className="block col-1">
            <h2 className="align"> Cart Items </h2>
            <hr/>
            <div>
                {cartItems.length === 0 && <div className="align"> Your cart is empty. </div>}
                {cartItems.map(item => (

                    <div key={item.id} className="row">

                        <div  className="col-2"> {item.name} </div>
                        <div className="col-2">
                            <button onClick={() => onAdd(item)} className="add small-button"> + </button>
                            {'   '}
                            <button onClick={() => onRemove(item)} className="remove small-button"> - </button>
                        </div>
                        <div className="col-2 text-right">
                            {item.qty} x {item.price.toFixed(2)} zł

                        </div>

                        <div>

                        </div>
                    </div>

                ))}
            </div>
            {cartItems.length !== 0 && (
                <div >
                    <hr/>

                    <div className="row ">
                        <div className="col-2"> Items Price </div>
                        <div className="col-1 text-right"> {itemsPrice.toFixed(2)} zł </div>
                    </div>
                    <div className="row">
                        <div className="col-2"> Tax Price </div>
                        <div className="col-1 text-right"> {taxPrice.toFixed(2)} zł </div>
                    </div>
                    <div className="row">
                        <div className="col-2"> Shipping Price </div>
                        <div className="col-1 text-right"> {shippingPrice.toFixed(2)} zł </div>
                    </div>
                    <div className="row  bold">
                        <div className="col-2"> Total Price </div>
                        <div className="col-1 text-right"> {totalPrice.toFixed(2)} zł </div>

                    </div>

                    <div className="row center" >
                        <button className="submit2"> Checkout </button>
                        {' '}
                        <button  className="submit2"> Clear cart </button>
                    </div>
                </div>
            )}
        </aside>
    )
}