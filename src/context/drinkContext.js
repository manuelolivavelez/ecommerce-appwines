import React, { createContext, useEffect, useState } from 'react';
import { getDataBase } from '../api/firebase';


const drinkContext = createContext({});

export const DrinkProvider = ({ children }) => {
  
  const [ drinks, setDrinks ] = useState([]);

  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    
    const getDrinks = async () => {
      
      setLoading(true);
      
      const db = getDataBase();

      const drinkCollection = db.collection('productos');
      
      const drinkSnapshot = await drinkCollection.get();
      
      const drinkList = drinkSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      console.log('drinkList', drinkList);
      
      setDrinks(drinkList);

      setLoading(false);
    
    };
    
    getDrinks();
  
  }, []);

  return (
    
    <drinkContext.Provider value={{ loading, drinks, setDrinks }}>
      
      { children }
    
    </drinkContext.Provider>
  
  );

};

export default drinkContext;