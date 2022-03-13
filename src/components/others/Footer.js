import React from 'react';

function Footer(props) {
    return (
        <div className="row block">
            <div className="col-1">
                <h3>Main Menu</h3>
                <hr/>
                <ul>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="/register">Sign-in</a>
                    </li>
                    <li>
                        <a href="/">Search</a>
                    </li>
                    <li>
                        <a href="/basket">Cart</a>
                    </li>
                </ul>


            </div>
            <div className="col-1 align ">
                <h3>Gaming community</h3>
                <hr/>
                <ul>
                    <li>
                        <a href="https://steelseries.com/blog">Blogs</a>
                    </li>
                    <li>
                        <a href="https://steelseries.com/esports">Esports</a>
                    </li>
                    <li>
                        <a href="https://games.steelseries.com/home">Game Giveaways</a>
                    </li>
                    <li>
                        <a href="https://steelseries.com/press">Press Releases</a>
                    </li>
                    <li>
                        <a href="https://jobs.jobvite.com/steelseriescareers">Career</a>
                    </li>
                </ul>






            </div>
            <div className="col-1 align">
                <h3>Newsletter</h3>
                <hr/>
                <p>Sign up for new products, sales, events and much more.</p>
                <input type="text" placeholder="Your e-mail"/>
                <button className="submit">Join</button>
            </div>
        </div>
    );

}

export default Footer;