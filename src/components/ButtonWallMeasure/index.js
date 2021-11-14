import React, { useState, useContext } from "react";
import AmountOfPaints from "../AmountOfPaints";
import PropTypes from "prop-types";
import TodoContext from "../../context/TodoContext";
import MessageRules from "../MessageRules";
import { Div, Button } from "./style";

export default function ButtonWallMeasure({ setNumWall, numWall }) {
  const { wallInformation, setActiveWall, activeWall, message, setMessage } = useContext(TodoContext);  
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  const [ inkQuantity, setInkQuantity ] = useState();
  const NUMBERFIVE = 5;
  const [ number, setNumber ] = useState(2);

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
      return cc + value / 5;
    }, 0);
    setInkQuantity(reduced.toFixed(2));
    setIsModalVisible(true);
  }
    
  return (   
    <Div> 
      <Button 
        data-testid="btn-add-wall"
        onClick={() => handleAddWall(number)}            
        type="button"
        disabled={number === NUMBERFIVE && true}
        colorPrimary={number === NUMBERFIVE}  
      >
        Adicionar parede
      </Button> 
      <Button second 
        data-testid="btn-calculate"
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

ButtonWallMeasure.propTypes = {
  setNumWall: PropTypes.array,
  numWall: PropTypes.array,
};
  