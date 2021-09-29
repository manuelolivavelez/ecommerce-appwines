import React, { createContext, useState } from 'react';

const checkItemQty = (list, item) => {
  
    const drinkFound = list.find(drink => drink.id === item.id);

    if (drinkFound) {
    
        drinkFound.cantidad = drinkFound.cantidad + item.cantidad; 

        console.log('drinkFound cantidad', drinkFound.cantidad);
  
    }else {
    
        list.push({ ...item, cantidad: item.cantidad });

    }
    
    return list;

};

const cartContext = createContext([]);

export const CartProvider = ({ children }) => {
    
    const [ cart, setCart ] = useState([]);
  
    const addItem = (item) => {
    
        const cartDraft = [...cart];

        console.log('cartdraft', cartDraft);
    
        const cleanCart = checkItemQty(cartDraft, item)
    
        setCart(cleanCart);

        console.log('cantidad:', item.cantidad);
    
    };

    const removeItem = (itemId) => {
    
        const cartDraft = [...cart];
    
        const cleanCart = cartDraft.filter(item => item.id !== itemId);
    
        setCart(cleanCart);
  
    };

    console.log('cart',cart);

  
    return (
    
        <cartContext.Provider value={{ cart, addItem, removeItem }}>
      
            {children}
    
        </cartContext.Provider>
  
    );

};

export default cartContext;