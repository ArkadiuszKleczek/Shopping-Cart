import React from 'react';

function Address(props) {
    return (
        <div className="block col-1">
            <form className="form">
                <h1>Shipping address:</h1>
                <div className="form-inputs">
                    <label htmlFor="name">Name and surname or company name:</label>
                    <input id="name" type="text" name="name" className="form-input" placeholder="John Doe"/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="street">Street:</label>
                    <input id="street" type="text" name="street" className="form-input" placeholder="Baker Street"/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="house">House or flat number:</label>
                    <input id="house" type="text" name="house" className="form-input" placeholder="221B"/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="city">City:</label>
                    <input id="city" type="text" name="city" className="form-input" placeholder="London"/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="e-mail">E-mail:</label>
                    <input id="e-mail" type="text" name="e-mail" className="form-input" placeholder="john.d1337@gmail.com"/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="phone">Phone number:</label>
                    <input id="phone" type="text" name="phone" className="form-input" placeholder="777888999"/>
                </div>
            </form>
        </div>
    );
}

export default Address;