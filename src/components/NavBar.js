import React, { useContext } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router';

import logo from '../images/logoblanco.png';
import CartWidget from './CartWidget';
import cartContext from '../context/cartContext';


const NavBar = () => {

    const { cart, totalQty } = useContext(cartContext);

    const history = useHistory();

    return (
        
        <Navbar bg="dark" variant="dark" fixed="top">
        
            <Container>

                <Navbar.Brand href="/">

                    <img
                        src={logo}
                        width="149"
                        height="50"
                        className="d-inline-block align-top"
                        alt="App Wines"
                    />

                </Navbar.Brand>
            
                <Nav>
      
                    <Nav.Link onClick={() => history.push('/category/tintos')}>Vinos Tintos</Nav.Link>
            
                    <Nav.Link onClick={() => history.push('/category/blancos')}>Vinos Blancos</Nav.Link>
            
                    <Nav.Link onClick={() => history.push('/category/espumantes')}>Espumantes</Nav.Link>

                    <Nav.Link onClick={() => history.push('/cart')}>
                        
                        <CartWidget countCartItems={totalQty} />   
                            
                    </Nav.Link>
        
                </Nav>
    
            </Container>
  
        </Navbar>

    )

}

export default NavBar;