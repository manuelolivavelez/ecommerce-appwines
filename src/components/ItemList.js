import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Card, Row, Button, Col, Spinner } from 'react-bootstrap';

import drinkContext from '../context/drinkContext';


const ItemList = () => {

  const history = useHistory();
  
  const { drinks, loading } = useContext(drinkContext);

  console.log("ItemList drinks", drinks);

  const handleNavigationDetail = (id) => {
  
    history.push(`/item-detail/${id}`);
  
  };

  console.log({ drinks })
  
  return (
  
    <>

      <h2 

      style={{ 
        
        textAlign: "center",
        
        paddingTop: "10%",
        
      }}

      >

      Bienvenido a AppWines

      </h2>

      <Container
      
        style={{

          paddingTop: "3%",

          paddingBottom: "3%",

        }}

      >

      {loading && (
            
        <Container
            
          style={{

            display: "grid",

            justifyContent: "center",

            height: "100vh"

          }}
                
        >
            
          <Spinner animation="border" variant="dark" />
              
        </Container>
              
      )}
            
      {!loading && (

        <Row xs={1} md={4} className="g-4">
              
          {drinks.map((drinkItem) => (

            <Col>

              <Card 
                    
                style={{ 
                      
                  width: '16rem',
                        
                  boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.3)"
                        
                }}
                      
              >

                <Link to={`/item-detail/${drinkItem.id}`}>

                  <Card.Img variant="top" src={drinkItem.imagen} className="mt-3" />

                </Link>

                <Card.Body>
                        
                  <Card.Title>{drinkItem.nombre}</Card.Title>
                        
                  <Card.Text>${drinkItem.precio}</Card.Text>
                        
                  <Button variant="primary" onClick={() => handleNavigationDetail(drinkItem.id)}>Ver detalle</Button>
                      
                </Card.Body>
                    
              </Card>

            </Col>

          ))}
            
        </Row>

      )}

      </Container>
    
    </>
  
  );

};

export default ItemList;
