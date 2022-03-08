import React from 'react';

function Form(props) {
    return (
        <div className="block col-1">
            <form className="form">
                <h1>Register</h1>
                <div className="form-inputs">
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" name="username" className="form-input" placeholder="User123"/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="email">E-mail:</label>
                    <input id="email" type="text" name="email" className="form-input" placeholder="john.d123@gmail.com"/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="text" name="password" className="form-input" placeholder="sherlock123"/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="confirmPassword">Confirm password:</label>
                    <input id="confirmPassword" type="text" name="confirmPassword" className="form-input" placeholder="sherlock123"/>
                </div>
            </form>
        </div>
    );
}

export default Form;