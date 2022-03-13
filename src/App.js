import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";
import {useState} from "react";
import Register from "./components/Forms/Register";
import Address from "./components/Forms/Address";
import Payment from "./components/Forms/Payment";
import Footer from "./components/others/Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Search from "./components/Search";

function App() {
    const {products} = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = product => {
    // product.preventDefault();
        const exist = cartItems.find(ele => ele.id === product.id);
        if (exist) {
            setCartItems(cartItems.map(ele => ele.id === product.id ? {
                        ...exist, qty: exist.qty + 1} : ele
                )
            );
        } else {
            setCartItems([...cartItems, {...product, qty: 1}])
        }
    }

    const onRemove = product => {
        // product.preventDefault();
        const exist = cartItems.find(ele => ele.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter(ele => ele.id !== product.id))
        } else { /*if more than 1*/
            setCartItems(cartItems.map(ele => ele.id === product.id ? {
                    ...exist, qty: exist.qty - 1} : ele
                )
            );

        }
    };



    return (
        <div className="App">
            <Header countCartItems={cartItems.length}/>

          {/*  <section className="row">
                <Main onAdd={onAdd} products={products}/>
                <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
            </section>
            <section className="row">
                <Register/>
                <Address/>
                <Payment/>
            </section>*/}
            <Router>
                <div>
                    <div className="row">

                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/basket">Basket</Link>
                            </li>
                            <li>
                                <Link to="/forms">Forms</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>

                        <hr />
                    </div>
                    <Switch>
                        <Route exact path="/">
                            <section className="row">
                                <Main onAdd={onAdd} products={products}/>
                            </section>

                        </Route>
                        <Route path="/basket">
                            <Basket  onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
                        </Route>
                        <Route path="/forms">
                            <section className="row">

                                <Address/>
                                <Payment/>
                            </section>
                        </Route>
                        <Route path="/register">
                            <Register/>
                        </Route>
                    </Switch>
                </div>
            </Router>
            <footer>
                <Footer/>
            </footer>

        </div>
    );
}

export default App;
