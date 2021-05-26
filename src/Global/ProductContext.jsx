import React, { createContext, useState } from 'react';
import pic1 from "../assets/p1.jpg"
import pic2 from "../assets/p2.jpg"
import pic3 from "../assets/p3.jpg"
import pic4 from "../assets/p4.jpg"
import pic5 from "../assets/p5.jpg"
import pic6 from "../assets/p6.jpg"
import pic7 from "../assets/p7.jpg"
import pic8 from "../assets/p8.jpg"

export const ProductContext = createContext()

 const ProductContextProvider = (props) => {
    const [products] = useState([
        { id: 1, name: "Pic1", price: 500, image: pic1, status: "hot" },
        { id: 2, name: "Pic2", price: 104, image: pic2, status: "hot" },
        { id: 3, name: "Pic3", price: 870, image: pic3, status: "hot" },
        { id: 4, name: "Pic4", price: 880, image: pic4, status: "hot" },
        { id: 5, name: "Pic5", price: 900, image: pic5, status: "hot" },
        { id: 6, name: "Pic6", price: 400, image: pic6, status: "hot" },
        { id: 7, name: "Pic7", price: 400, image: pic7, status: "hot" },
        { id: 8, name: "Pic8", price: 100, image: pic8, status: "hot" },

    ])
    return (
        <div>
            <ProductContext.Provider value={{ products: [...products] }}>
                {props.children}
            </ProductContext.Provider>
        </div>
    );
};

export default ProductContextProvider;