import React, { useState, useContext } from "react";
import AmountOfPaints from "../AmountOfPaints";
import TodoContext from '../../context/TodoContext';
import { Div, Button } from './style';

export default function ButtonWallMeasure(props) {
    const { wallInformation } = useContext(TodoContext);  
    const [isModalVisible, setIsModalVisible] = useState(false)
    const { setNumWall, numWall } = props;
    const [ number, setNumber ] = useState(2);
    const [ number2, setNumber2 ] = useState();
    const NUMBERFIVE = 5;

    function UpdateNumber(sum) {
        setNumWall([...numWall, sum]);
        setNumber(number + 1);
    }
    
    function handleCalcularNumber() {
        var reduced = wallInformation.reduce((cc, value) => {
            return cc + value / 5
        }, 0)
        setNumber2(reduced)
        setIsModalVisible(true);
    }
    
    return (   
        <Div> 
            <Button 
                onClick={() => UpdateNumber(number)}            
                type="button"
                disabled={number === NUMBERFIVE && true}
                >
                Adicionar parede
            </Button> 
            <Button second 
                type="button"
                onClick={() => handleCalcularNumber()}
                >
                Calcular
            </Button> 
            {isModalVisible && <AmountOfPaints number2={number2} />}
        </Div>
    );
}