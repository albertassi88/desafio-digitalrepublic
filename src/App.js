import React from "react";
import Home from "./pages/Home/index";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <div>
      <TodoProvider>
        <Home />
      </TodoProvider>
    </div>
  );
}

export default App;