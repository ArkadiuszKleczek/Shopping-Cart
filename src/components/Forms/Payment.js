import React from 'react';

function Payment(props) {
    return (

        <div className="block col-1 align">
            <h1>Payment</h1>
            <hr/>
            <p>Shipment Method:</p>
            <select name="shipment" id="shipment">
                <option value="courier">Kurier</option>
                <option value="parcelLocker">Paczkomat</option>
                <option value="selfPickup">Odbiór osobisty</option>
                <option value="pickupPoint">Punkty odbioru</option>
            </select>
            <p>Payment Method:</p>
            <select name="payment" id="payment">
                <option value="blik">BLIK</option>
                <option value="cardPaymentOnline">Karta płatnicza online</option>
                <option value="onlinePayment">Płatność online</option>
                <option value="cashTransfer">Przelew gotówkowy</option>
            </select>
            <div>
                <br/>
                <button className="form">Confirm</button>
                {' '}
                <button className="form">Reset</button>
            </div>

        </div>
    );
}

export default Payment;