import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoContext from "./TodoContext";

export default function TodoProvider({ children }) {
  const [ wallInformation, setWallInformation ] = useState([]);
  const [ activeWall, setActiveWall ] = useState(true); 
  const [ message, setMessage ] = useState(""); 

  const context = {
    wallInformation,
    setWallInformation, 
    setActiveWall, 
    activeWall, 
    message,
    setMessage,  
  };

  return (
    <div>
      <TodoContext.Provider value={ context }>
        {children}
      </TodoContext.Provider>
    </div>
  );
}

TodoProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

