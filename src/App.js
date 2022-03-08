import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";
import {useState} from "react";
import Form from "./components/Form";
import Address from "./components/Address";
import Payment from "./components/Payment";

function App() {
    const {products} = data;
    const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Header/>
      <div className="row">
        <Main products={products}/>
        <Basket cartItems={cartItems}/>
      </div>
        <div className="row">
            <Form />
            <Address/>
            <Payment/>
        </div>

    </div>
  );
}

export default App;
