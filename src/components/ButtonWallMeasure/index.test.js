import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoContext from "../../context/TodoContext";
import ButtonWallMeasure from ".";

describe("test the ButtonWallMeasure component", () => {     
  it("check when activeWall is True, it has to return the phrase in message", () => {
    const contextValue = {
      activeWall: true,
      setMessage: () => {},
      message: "Favor Salvar antes de adicionar nova parede!"
    };
    const wrapper = ({ children }) => (
      <TodoContext.Provider value={contextValue}>
        {children}
      </TodoContext.Provider>
    );
    render(<ButtonWallMeasure/>, { wrapper });
    const buttonWall = screen.getByTestId("btn-add-wall");
    fireEvent.click(buttonWall);
    expect(screen.getByText(/Favor/).textContent).toBe("Favor Salvar antes de adicionar nova parede!");    
  });  

  it("check when activeWall is False", () => {
    const contextValue = {
      activeWall: false,
      setActiveWall: () => true            
    };
    const wrapper = ({ children }) => (
      <TodoContext.Provider value={contextValue}>
        {children}
      </TodoContext.Provider>
    );
    render(<ButtonWallMeasure setNumWall={() => [1]} numWall={[1]}/>, { wrapper });
    const buttonWall = screen.getByTestId("btn-add-wall");
    fireEvent.click(buttonWall);
  });
});
  