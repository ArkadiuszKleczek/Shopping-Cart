import React from "react";

export default function Header(props) {
  return (
    <header className="block row header-radius ">
      <div>
        <a href="#/">
          <h1>Cart Components</h1>
        </a>
      </div>
        <div className="center">
            <form action="/" method="get">
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search products</span>
                </label>
                <input
                    className="header-search-input"
                    type="text"
                    id="header-search"
                    placeholder="Search products..."
                    name="s"
                />
                <button className="submit" type="submit">Search</button>
            </form>
        </div>
      <div  className="center" >
        <a style={{padding: '0 1rem'}} href="#/">
          Cart{' '}
          {
              props.countCartItems ? (<button  className="small-button"> {props.countCartItems} </button>) : ('')
          }
        </a>
          {' '}
        <a  href="#/"> Login</a>
      </div>
    </header>
  );
}