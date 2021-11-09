import React, { useState } from "react"; 
import HeaderWallMeasure from "../HeaderWallMeasure";
import NewWallMeasure from "../NewWallMeasure";
import { Div, Li } from './style';

export default function WallMeasure() { 
    const [numWall, setNumWall] = useState([1]);   

    return ( 
        <Div>
            <Div second>
                <HeaderWallMeasure />
                    <ul>
                        {numWall.map(number => (
                            <Li>
                                <Div third>                                    
                                    <NewWallMeasure numWall={number} />
                                </Div>    
                            </Li>
                        ))}
                    </ul>
            </Div>
        </Div>
    ); 
}