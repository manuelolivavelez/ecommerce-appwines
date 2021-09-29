import { BrowserRouter, Switch, Route} from "react-router-dom";

import { DrinkProvider } from './context/drinkContext';
import { CartProvider } from './context/cartContext';

import ItemList from './components/ItemList';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemDetail from './components/ItemDetail';


const App = () => {

  return (
      
    <DrinkProvider>
        
      <CartProvider>
          
        <BrowserRouter basename="/">
            
          <NavBar />
            
          <Switch>
              
            <Route exact path="/">
                
              <ItemList /> 
              
            </Route>

            <Route exact path="/category/:categoria">
                
              <ItemList /> 
              
            </Route>
              
            <Route path="/item-detail/:id">
                
              <ItemDetail />
              
            </Route>
              
            <Route path="/cart">
                
              <Cart />
              
            </Route>
            
          </Switch>
          
        </BrowserRouter>
        
      </CartProvider>
      
    </DrinkProvider>
  
  );

}

export default App;