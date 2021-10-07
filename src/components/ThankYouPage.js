import { Card, Container, Button } from "react-bootstrap";


const ThankYouPage = () => {

    return (

        <Container
            
            style={{ 
                
                paddingTop: "10%",
                
            }}
            
        >

            <Card>

                <Card.Body>
                            
                        <Card.Title className="mb-3 mt-3"><h2>Muchas gracias por su compra!</h2></Card.Title>
            
                        <Card.Subtitle className="mb-3"><h4>En 5 días hábiles recibirá en su domicilio el pedido.</h4></Card.Subtitle>
            
                        <Card.Text>Deberán presentar el DNI del titular de la compra.</Card.Text>
            
                </Card.Body>

            </Card>

            <Button 
                    
                variant="outline-primary" 
                        
                href='/'
                        
                style={{

                    marginTop: '1%'

                }}
                        
            >
                        
                Volver al listado de productos
                        
            </Button>

        </Container>    
       
    )
}

export default ThankYouPage;