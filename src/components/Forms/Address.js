import React from 'react';

function Address(props) {
    return (
        <div className="block col-1 align">
            <form className="form">
                <h1>Shipping address:</h1>
                <hr/>
                <div className="form-inputs">
                    <label htmlFor="name">Name and surname or company name:</label><br/>
                    <input id="name" type="text" name="name" className="form-input" placeholder="John Doe"/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="street">Street:</label><br/>
                    <input id="street" type="text" name="street" className="form-input" placeholder="Baker Street"/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="house">House or flat number:</label><br/>
                    <input id="house" type="number" name="house" className="form-input" placeholder="221B"/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="city">City:</label><br/>
                    <input id="city" type="text" name="city" className="form-input" placeholder="London"/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="phone">Phone number:</label><br/>
                    <input id="phone" type="text" name="phone" className="form-input" placeholder="777888999"/>
                </div>
            </form>
               <div>
                   <br/>
                   <button className="form">Confirm</button>
                   {' '}
                   <button className="form">Reset</button>
               </div>

        </div>
    );
}

export default Address;