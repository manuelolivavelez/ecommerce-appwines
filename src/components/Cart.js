import { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { getDataBase } from '../api/firebase';

import firebase from 'firebase';
import cartContext from '../context/cartContext'; 


const userInfo = {
  name: 'Manuel',
  mail: 'manuel@gmail.com',
  phone: '1122334455'
};

const getTotal = (cart) => {

	console.log("cart", cart);
  	
	let total = 0;
  	
	cart.forEach(item => {
    
		total += (item.precio * item.cantidad)

		console.log("total", total);
  
	});
  
	return total;

};

const Cart = () => {
  
	const history = useHistory();
  
	const { cart, addItem, removeItem } = useContext(cartContext);
 
  	console.log({cart});

  	const handleBuy = async () => {
    
		console.log('FIN de compra');
    
		const db = getDataBase();
    
		const orderCollection = db.collection('orders');
    
		const order = {
      
			buyer: userInfo,
      
			items: cart,
      
			date: firebase.firestore.Timestamp.fromDate(new Date()),
      
			total: getTotal(cart)
    
		};
		
		const orderReference = await orderCollection.add(order);
    
		console.log(orderReference);
  
	};

	return (
    
		<aside className="block">
        
            <h2 style={{ paddingTop: "100px"}}>Carrito de compras</h2>
            
            <div>
            
                {cart.length === 0 && 
                
                <>

                    <div>Carrito vacío</div>
                
                    <Link to={`/`}>
                        
                        <button>Volver al listado de productos</button>
                    
                    </Link>

                </>
                
                }
            
                {cart.map((products) => (
                
                    <div key={products.id} className="row">
                
                        <div className="col-2">{products.nombre}</div>
                
                        <div className="col-2">
                        
                            <button onClick={() => removeItem(products)} className="remove">
                        
                            -
                        
                            </button>{' '}
                        
                            <button onClick={() => addItem(products)} className="add">
                            
                            +
                            
                            </button>
                        
                        </div>
        
                        <div className="col-2 text-right">
                    
                            {products.cantidad} x ${products.precio}
                    
                        </div>
                
                    </div>
            
                ))}
    
                {cart.length !== 0 && (
                
                    <>
                
                    <hr></hr>
        
                    <div className="row">
                        
                        <div className="col-2">
                        
                        <strong>Total</strong>
                        
                        </div>
                        
                        <div className="col-1 text-right">
                        
                        <strong>${getTotal(cart)}</strong>
                        
                        </div>
                    
                    </div>
                    
                    <hr />
                    
                    <div className="row">
                        
                        <button onClick={handleBuy}>
                        
                        Checkout
                        
                        </button>
                    
                    </div>
                    
                    </>
            
                )}
            
            </div>
      
        </aside>
  
 	);

};

export default Cart;