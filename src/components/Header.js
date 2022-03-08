import React from "react";



export default  function Header(props) {
    return (
        <header className="row block center">
            <div>
                <a href="#" className="siteName">
                    Shopping Cart
                </a>
            </div>
            <div>
                <input type="text" placeholder="Search..."/>
            </div>
            <div>
                <a href="#/cart" > Cart </a>
                <a href="#/signin"> Sign In</a>
            </div>
        </header>
    )
}