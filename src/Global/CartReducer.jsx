export const CartReducer = (state, action) => {
    const { shoppingCart, totalPrice, qty } = state;
    let product
    let updatedPrice
    let UpdatedQty
    let index
    switch (action.type) {
        case 'ADD_TO_CART':
            const check = shoppingCart.find(producttt => producttt.id === action.id)
            if (check) {
                return state;
            } else {
                product = action.product;
                product['qty'] = 1;
                UpdatedQty = qty + 1;
                updatedPrice = totalPrice + product.price;
                return {
                    shoppingCart: [product, ...shoppingCart], totalPrice: updatedPrice,
                    qty: UpdatedQty
                }


            }
        case 'INC':
            product = action.cartData;
            product.qty = product.qty + 1;
            updatedPrice = totalPrice + product.price;
            UpdatedQty = qty + 1;
            index = shoppingCart.findIndex(cartt => cartt.id === action.id)
            shoppingCart[index] = product;
            return {
                shoppingCart: [...shoppingCart], totalPrice: updatedPrice,
                qty: UpdatedQty
            }

        case 'DEC':
            product = action.cartData;
            if (product.qty > 1) {
                product.qty = product.qty - 1;
                updatedPrice = totalPrice - product.price;
                UpdatedQty = qty - 1;
                shoppingCart[index] = product
                return {
                    shoppingCart: [...shoppingCart],
                    totalPrice: updatedPrice,
                    qty: UpdatedQty
                }
            }
            else {
                return state
            }

        case 'DELETE':
            let filtered = shoppingCart.filter(filterData => filterData.id !== action.id)
            product = action.cartData;
            UpdatedQty = qty - product.qty;
            updatedPrice = totalPrice - product.price * product.qty
            return {
                shoppingCart: [...filtered], totalPrice: updatedPrice,
                qty: UpdatedQty
            }
            break

        default:
            return state
    }

}