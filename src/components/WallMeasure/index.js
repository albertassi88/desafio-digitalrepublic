import React, { useState } from "react"; 
import HeaderWallMeasure from "../HeaderWallMeasure";
import NewWallMeasure from "../NewWallMeasure";
import ButtonWallMeasure from "../ButtonWallMeasure";
import { Div, Li } from "./style";

export default function WallMeasure() { 
  const [numWall, setNumWall] = useState([1]);   

  return ( 
    <Div>
      <Div second>
        <HeaderWallMeasure />
        <ul>
          {numWall.map((number, index) => (
            <Li key={index}>
              <Div third>                                    
                <NewWallMeasure numWall={number} />
              </Div>    
            </Li>
          ))}
          <ButtonWallMeasure setNumWall={setNumWall} numWall={numWall}/>
        </ul>
      </Div>
    </Div>
  ); 
}