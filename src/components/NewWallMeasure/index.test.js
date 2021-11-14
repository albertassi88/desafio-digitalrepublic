import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewWallMeasure from ".";

describe("test the NewWallMeasure component", () => {     
  beforeEach(() => {
    render(<NewWallMeasure />);
  });

  it("write the number in the input height", () => {        
    const fieldHeight = screen.getByTestId("field-height");
    fireEvent.change(fieldHeight, {target: {value: "4"}});
    expect(fieldHeight.value).toEqual("4");
  }); 

  it("write the number in the input width", () => {        
    const fieldWidth = screen.getByTestId("field-width");
    fireEvent.change(fieldWidth, {target: {value: "2"}});
    expect(fieldWidth.value).toEqual("2");
  }); 

  it("select the number of windows", () => {        
    const fieldWindow = screen.getByTestId("field-window");
    fireEvent.change(fieldWindow, {target: {value: "1"}});
    expect(fieldWindow.value).toEqual("1");
  }); 

  it("select the number of doors", () => {        
    const fieldDoor = screen.getByTestId("field-door");
    fireEvent.change(fieldDoor, {target: {value: "1"}});
    expect(fieldDoor.value).toEqual("1");
  });     
});
  