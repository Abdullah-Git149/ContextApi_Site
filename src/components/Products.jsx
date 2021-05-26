import React, { useContext } from 'react';
import Banner from './Banner';
import {CartContext} from "../Global/CartContext"
import { ProductContext } from "../Global/ProductContext"
const Products = () => {
    const { products } = useContext(ProductContext);
    const {dispatch} = useContext(CartContext);
    const data = useContext(CartContext)
    console.log("data =>",data)

    return (
        <div className="products">
            <Banner />
            <div className="container">

                <div className="product__flex">
                    {products.map((product) => (
                        <div className="product__box" key={product.id}>
                            <div className="product__img">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="product__detail">
                                <div className="product__name">
                                    {product.name}
                                </div>
                                <div className="product__price">
                                    $ {product.price}
                                </div>
                            </div>
                            <div className="add__to__cart" onClick={()=>dispatch({type:'ADD_TO_CART' ,id:product.id,product})}>
                                Add to cart
                        </div>

                        </div>
                    ))}
                </div>
                aa
            </div>



        </div>
    );
};

export default Products;