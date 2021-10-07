import { useState, useContext } from "react";
import { ButtonGroup, Button, Stack } from "react-bootstrap";
import { useHistory } from "react-router";

import cartContext from "../context/cartContext";

const ItemCount = ({ drink }) => {

    const history = useHistory();

    const { addItem } = useContext(cartContext);

    const [ count, setCount ] = useState(1);

    const handleClick = () => addItem(drink, count);


    const upCount = () => {

        if (count < drink.stock){
    
            setCount(count + 1)
    
        }

    };

    const downCount = () => {

        if (count > 1){

            setCount(count - 1)

        }

    };

    return (


        <Stack gap={2} className="col-md-12">
              
            <div>

                <h5>Cantidad de unidades:</h5>

                <ButtonGroup size="sm" className="col-sm-4">
                        
                    <Button variant="dark" onClick={downCount}>-</Button>
                                        
                    <div 
                                        
                        className="col-sm-8"
                
                        style={{
                
                            border: "1px solid #000000",

                            textAlign: "center"
                
                        }}
                                            
                    >
                                
                        {count}
                                
                    </div>
                                    
                    <Button variant="dark" onClick={upCount}>+</Button>
            
                </ButtonGroup>
                
            </div>

            <Button variant="primary" className="mt-3" onClick={() => handleClick(drink, count)}>Agregar al carrito</Button>

            <Button variant="outline-primary" className="mt-2" onClick={() => history.push('/')}>Volver al listado de productos</Button>

        </Stack>

    );

}

export default ItemCount;