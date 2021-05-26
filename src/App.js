import './App.css';
import CartContextProvider from "./Global/CartContext"
import Navbar from './components/Navbar';
import Products from './components/Products';
import ProductContextProvider from './Global/ProductContext';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Products}></Route>
              <Route path="/Cart" exact component={Cart}></Route>
            </Switch>
          </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
