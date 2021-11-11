import React, { useState, useContext } from "react";
import AmountOfPaints from "../AmountOfPaints";
import TodoContext from '../../context/TodoContext';
import MessageRules from "../MessageRules";
import { Div, Button } from './style';

export default function ButtonWallMeasure(props) {
    const { wallInformation, setActiveWall, activeWall, message, setMessage } = useContext(TodoContext);  
    const { setNumWall, numWall } = props;
    const [ isModalVisible, setIsModalVisible ] = useState(false)
    const [ inkQuantity, setInkQuantity ] = useState();
    const [ number, setNumber ] = useState(2);
    const NUMBERFIVE = 5;

    function handleAddWall(sum) {
        if (activeWall) {
            setMessage("Favor Salvar antes de adicionar nova parede!");
        }else {
            setNumWall([...numWall, sum]);
            setNumber(number + 1);
            setActiveWall(true);
        }
    }
    
    function handleCalculateNumber() {
        let reduced = wallInformation.reduce((cc, value) => {
            return cc + value / 5
        }, 0)
        setInkQuantity(reduced);
        setIsModalVisible(true);
    }
    
    return (   
        <Div> 
            <Button 
                onClick={() => handleAddWall(number)}            
                type="button"
                disabled={number === NUMBERFIVE && true}
                color={number === NUMBERFIVE}  
                >
                Adicionar parede
            </Button> 
            <Button second 
                onClick={() => handleCalculateNumber()}
                type="button"
                disabled={number === NUMBERFIVE  && !activeWall ? false : true}
                colorSecond={number !== NUMBERFIVE} 
                >
                Calcular
            </Button> 
            {isModalVisible && <AmountOfPaints inkQuantity={inkQuantity} />}
            <MessageRules message={message}/>
        </Div>
    );
}