import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    console.log('carrito: ', cart);

    const addProduct = (item, cantidad) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, cantidad: product.cantidad + cantidad } : product
            }));
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    }

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    return(
        <CartContext.Provider value={{
            addProduct
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;