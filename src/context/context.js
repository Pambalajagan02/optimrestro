import React from 'react';

const MyContext = React.createContext({
    cartItem:[],
    setCartItem:()=>{},
    incrementCartItemQuantity: () => {},
    decrementCartItemQuantity: () => {},
    removeAllCartItems: () => {},
    removeCartItem: () => {},
}

);

export default MyContext;