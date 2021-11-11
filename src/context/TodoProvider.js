import React, { useState } from 'react';
import TodoContext from './TodoContext';

function TodoProvider({ children }) {
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

export default TodoProvider;
