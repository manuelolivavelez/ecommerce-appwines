import React, { useContext } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

import logo from '../images/logoblanco.png';
import CartWidget from './CartWidget';
import cartContext from '../context/cartContext';


const NavBar = ({totalProducts}) => {

    const { cart } = useContext(cartContext);

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
      
                    <Nav.Link href="/category/tintos">Vinos Tintos</Nav.Link>
            
                    <Nav.Link href="/category/blancos">Vinos Blancos</Nav.Link>
            
                    <Nav.Link href="/category/espumantes">Espumantes</Nav.Link>

                    <Nav.Link href="/cart">
                        
                        <CartWidget countCartItems={cart.length} />   
                            
                    </Nav.Link>
        
                </Nav>
    
            </Container>
  
        </Navbar>

    )

}

export default NavBar;