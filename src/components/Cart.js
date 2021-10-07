import { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { getDataBase } from '../api/firebase';
import { Table, Button, Container, ButtonToolbar } from 'react-bootstrap';

import firebase from 'firebase';
import cartContext from '../context/cartContext'; 


const userInfo = {
  name: 'Manuel',
  mail: 'manuel@gmail.com',
  phone: '1122334455'
};

const getTotal = (cart) => {
  	
	let total = 0;
  	
	cart.forEach(item => {
    
		total += (item.precio * item.cantidad);
  
	});
  
	return total;

};

const getTotalQty = (cart) => {

    let totalQty = 0;
  	
	cart.forEach(item => {

        totalQty += item.cantidad;
  
	});
  
	return totalQty;

};

const Cart = () => {
  
	const history = useHistory();
  
	const { cart, removeItem, removeAllItems, increaseItem, decreaseItem } = useContext(cartContext);

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
    
		<>
        
            <h2

                style={{ 
                        
                    textAlign: "center",
                
                    paddingTop: "10%",

                    paddingBottom: "3%"
                
                }}
            
            >
                Carrito de compras
                
            </h2>

            <Container>
            
                <Table responsive="md">
        
                    <thead>
                    
                        <tr>
                    
                            <th>Item</th>
                    
                            <th>Cantidad</th>
                    
                            <th>Acción</th>
                    
                            <th>Precio</th>
                    
                        </tr>
                    
                    </thead>
                    
                    {cart.map((products) => (
                    
                        <tbody>
                    
                            <tr>
                                
                                <td>{products.nombre} {products.variedad} (Bodegas {products.bodega})</td>
                                
                                <td>{products.cantidad}</td>
                                
                                <td>
                        
                                    <Button variant="danger" onClick={() => decreaseItem(products.id)}>-</Button>
                                        
                                    {' '}
                                                
                                    <Button variant="primary" onClick={() => increaseItem(products.id)}>+</Button>

                                    {' '}

                                    <Button variant="outline-danger" onClick={() => removeItem(products.id)}>
                                                    
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                            
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                            
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                        
                                        </svg>
                                                    
                                    </Button>
                                    
                                </td>
                                    
                                <td>${products.precio}</td>        
                                
                            </tr>
                    
                        </tbody>
                                
                    ))}  
                    
                    
                    
                        {cart.length === 0 && 

                            <tfoot>

                                <tr>

                                    <th>Carrito vacío - Comience a comprar!</th>
                                        
                                </tr>

                                <tr>

                                    <ButtonToolbar>

                                        <Button variant="outline-primary" onClick={() => history.push('/')}>Volver al listado de productos</Button>

                                    </ButtonToolbar>

                                </tr>

                            </tfoot>

                        }

                        {cart.length !== 0 && (
                               
                            <tfoot>   

                                <tr>

                                    <th>Total productos</th>
                                                
                                    <th>{getTotalQty(cart)}</th>
                                                
                                    <th>
                                                
                                        <Button variant="danger" onClick={() => removeAllItems()}>Vaciar todo</Button>
                                                
                                    </th>
                                        
                                    <th>${getTotal(cart)}</th>
                                            
                                </tr>

                                <tr>

                                    <ButtonToolbar className="justify-content-between">

                                        <Link to={`/thank-you`}>

                                            <Button variant="primary" onClick={handleBuy}>Finalizar compra</Button>

                                        </Link>
                                        
                                        <Button variant="outline-primary" onClick={() => history.push('/')}>Volver al listado de productos</Button>

                                    </ButtonToolbar>

                                </tr>

                            </tfoot>

                        )}

                    
                
                </Table>

                

            </Container>

        </>

 	);

};

export default Cart;