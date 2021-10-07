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

    const [ totalQty, setTotalQty ] = useState(0);
  
    const addItem = (item, count) => {
    
        const cartDraft = [...cart];

        console.log('cartdraft', cartDraft);
    
        const cleanCart = checkItemQty(cartDraft, { ...item, cantidad: count });
    
        setCart(cleanCart);

        getTotalQty(cleanCart);
    
    };

    const removeItem = (itemId) => {
    
        const cartDraft = [...cart];
    
        const cleanCart = cartDraft.filter(item => item.id !== itemId);
    
        setCart(cleanCart);

        getTotalQty(cleanCart);
  
    };

    const removeAllItems = () => {
    
        setCart([]);

        getTotalQty([]);
  
    };

    const decreaseItem = (itemId) => {

        let cartDraft = [...cart];

        const itemToDecrease = cartDraft.find(item => item.id === itemId);

        itemToDecrease.cantidad--

        if(itemToDecrease.cantidad === 0) {

            cartDraft = cartDraft.filter(item => item.id !== itemId);
            
        }

        setCart(cartDraft);

        getTotalQty(cartDraft);

    };

    const increaseItem = (itemId) => {

        const cartDraft = [...cart];

        const itemToIncrease = cartDraft.find(item => item.id === itemId);

        itemToIncrease.cantidad++

        const cleanCart = cartDraft

        setCart(cleanCart)

        getTotalQty(cleanCart);

    };


    const getTotalQty = (cart) => {

        let totalQty = 0;
        
        cart.forEach(item => {

            totalQty += item.cantidad;
    
        });
    
        setTotalQty(totalQty);

    };


    console.log('cart',cart);

  
    return (
    
        <cartContext.Provider value={{ cart, addItem, removeItem, removeAllItems, decreaseItem, increaseItem, totalQty }}>
      
            {children}
    
        </cartContext.Provider>
  
    );

};

export default cartContext;