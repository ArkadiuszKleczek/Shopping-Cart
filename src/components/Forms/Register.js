import React from 'react';

function Register(props) {
    return (

        <div className="block col-1 align">
            <form className="form">
                <h1>Register</h1>
                <hr/>
                <div className="form-inputs">
                    <label htmlFor="username">Username:</label><br/>
                    <input id="username" type="text" name="username" className="form-input" placeholder="User123"/>

                </div>
                <div className="form-inputs">
                    <label htmlFor="email">E-mail:</label><br/>
                    <input id="email" type="email" name="email" className="form-input" placeholder="john.d123@gmail.com"/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="password">Password:</label><br/>
                    <input id="password" type="password" name="password" className="form-input" placeholder="sherlock123"/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="confirmPassword">Confirm password:</label><br/>
                    <input id="confirmPassword" type="password" name="confirmPassword" className="form-input" placeholder="sherlock123"/>
                </div>
                <div>
                    <br/>
                    <button className="form">Sign up</button>
                    {' '}
                    <button className="form">Reset</button>
                </div>
                <div>
                    <span className="login">Already have an account? Login <a href="#">Here!</a></span>
                </div>

            </form>
        </div>
    );
}

export default Register;