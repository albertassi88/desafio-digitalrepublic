import React, { useState, useContext } from "react";
import TodoContext from "../../context/TodoContext";
import MeasureRules from "../../utils/MeasureRules";
import PropTypes from "prop-types";
import { DivOption, Span, Label, Input, Select, Button } from "./style";

export default function NewWallMeasure({ numWall }) {
  const { wallInformation, setWallInformation, setActiveWall, setMessage } = useContext(TodoContext);  
  const [ wallHeight, setWallHeight ] = useState(0);
  const [ wallWidth, setWallWidth] = useState(0);
  const [ windowsQuantities, setWindowsQuantities] = useState(0);
  const [ portQuantities, setPortQuantities] = useState(0); 
  const [ active, setActive ] = useState(false); 
  const numbers = [0, 1, 2, 3, 4, 5, 6];

  function updateWallInformation() {
    setWallInformation([
      ...wallInformation, 
      Number(wallHeight) * Number(wallWidth) 
            - Number(windowsQuantities) * 2.4 - Number(portQuantities) * 1.52
    ]);
    setActive(true);
    setActiveWall(false);
    setMessage("");
  }

  function SaveWallSize() {
    MeasureRules(wallHeight, wallWidth, windowsQuantities, portQuantities, updateWallInformation, setMessage);
  }

  return (
    <>
      <DivOption> 
        <Span primary data-testid="number-wall">{`PAREDE ${numWall}`}</Span>
        <Span>Altura</Span> 
        <Input 
          data-testid="field-height"
          placeholder="Em metros" 
          type="number"
          onChange={({target}) => setWallHeight(target.value)} 
          disabled={active}
        />            
      </DivOption> 
      <DivOption> 
        <Span>Largura</Span> 
        <Input 
          data-testid="field-width"
          placeholder="Em metros" 
          type="number" 
          onChange={({target}) => setWallWidth(target.value)} 
          disabled={active}
        /> 
      </DivOption>
      <DivOption primary>
        <Label htmlFor="window">Janela(s):</Label>
        <Select 
          data-testid="field-window"
          id="window" 
          onChange={({target}) => setWindowsQuantities(target.value)} 
          disabled={active}
        >
          {numbers.map((number, index) => (
            <option key={index} value={number}>
              {number}
            </option>  
          ))}                   
        </Select>
      </DivOption>
      <DivOption primary>
        <Label htmlFor="door">Porta(s):</Label>
        <Select 
          data-testid="field-door"
          id="door" 
          onChange={({target}) => setPortQuantities(target.value)} 
          disabled={active}
        >
          {numbers.map((number, index) => (
            <option key={index} value={number}>
              {number}
            </option>  
          ))}
        </Select>
      </DivOption>
      <DivOption>
        <Button 
          data-testid="btn-save"
          colorPrimary={active && "#969394"}                                     
          type="button"
          onClick={() => SaveWallSize()}
          disabled={active} 
        >
            Salvar
        </Button> 
      </DivOption>
    </> 
  );
}

NewWallMeasure.propTypes = {
  numWall: PropTypes.number,
};