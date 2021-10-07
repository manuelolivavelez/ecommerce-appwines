import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Spinner, Row, Col } from 'react-bootstrap';
import { getDataBase } from '../api/firebase';

import ItemCount from './ItemCount';


const ItemDetail = () => {

  const { id } = useParams();

  const [ drink, setDrink ] = useState(null);
  
  const [ loading, setLoading ] = useState(true); 

  useEffect(() => {
    
    const getDrink = async (id) => {
      
      setLoading(true);

      const db = getDataBase();
      
      const drinkReference = db.collection('productos').doc(id);
      
      const drinkSnapshot = await drinkReference.get();
      
      setDrink({ id: id, ...drinkSnapshot.data() });
      
      setLoading(false);
    
    };
    
    getDrink(id);
  
  }, []);

  return (
    
    <div>

      <h2 

        style={{ 
        
          textAlign: "center",
        
          paddingTop: "10%",

          paddingBottom: "3%"
        
        }}
      
      >
      
        Detalle del Producto
      
      </h2>

      <Container className="pb-5">

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
      
          <Card
          
            style={{ 
                        
              boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.3)"
              
            }}
            
          >
                  
            <Row className="p-5">
              
              <Col sm={4}>
            
                <Card.Img variant="top" src={drink.imagendetalle} className="mt-3 mb-3"/>

              </Col>
        
              <Col sm={8}>

                <Card.Body>
                          
                  <Card.Title className="mb-3 mt-3"><h2>{drink.nombre}</h2></Card.Title>

                  <Card.Subtitle className="mb-3"><h4>${drink.precio}</h4></Card.Subtitle>
                          
                  <Card.Subtitle className="mb-3 text-muted">Variedad: {drink.variedad}</Card.Subtitle>
                  
                  <Card.Subtitle className="mb-3 text-muted">Bodega: {drink.bodega}</Card.Subtitle>

                  <Card.Text>{drink.ficha}</Card.Text>

                  <ItemCount drink={drink} />

                </Card.Body>

              </Col>

            </Row>

          </Card>
            
        )}

      </Container>

    </div>
              
  );

};

export default ItemDetail;
