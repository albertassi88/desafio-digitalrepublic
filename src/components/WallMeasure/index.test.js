import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WallMeasure from ".";

describe("test the WallMeasure component", () => {     
  it("check if the phrase PAREDE 1 appears on the screen", () => {
    render(<WallMeasure />);
    expect(screen.getByText("PAREDE 1")).toBeInTheDocument();
  });      
});
  