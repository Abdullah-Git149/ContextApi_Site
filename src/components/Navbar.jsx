import React, { useContext } from 'react';
import pic from "../images/logo.png"
import {Link} from "react-router-dom"
import {CartContext} from "../Global/CartContext"
const Navbar = () => {
    const {qty} = useContext(CartContext)
    return (
        <div className="navbar">
            <div className="container">
                <nav className="nav">
                    <div className="nav__left">
                        <div className="logo">
                           <Link to="/"> <img src={pic} alt="" /></Link>
                        </div>
                    </div>
                    <div className="nav__right">
                        <ul>
                            <li><Link to="Cart" ><span><i class="fas fa-shopping-cart"></i></span>  <span className="conuter">{qty}</span></Link></li>

                        </ul>
                    </div>
                </nav>
            </div>

        </div>
    );
};

export default Navbar;