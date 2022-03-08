import React from 'react';

function Payment(props) {
    return (
        <div className="block col-1">
            <h2>Shipment Method:</h2>
            <select name="shipment" id="shipment">
                <option value="courier">Kurier</option>
                <option value="parcelLocker">Paczkomat</option>
                <option value="selfPickup">Odbiór osobisty</option>
                <option value="pickupPoint">Punkty odbioru</option>
            </select>
            <h2>Payment Method:</h2>
            <select name="payment" id="payment">
                <option value="blik">BLIK</option>
                <option value="cardPaymentOnline">Karta płatnicza online</option>
                <option value="onlinePayment">Płatność online</option>
                <option value="cashTransfer">Przelew gotówkowy</option>
            </select>
        </div>
    );
}

export default Payment;