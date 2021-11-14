import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AmountOfPaints from ".";

describe("test the AmountOfPaints component", () => {     
  it("verify that the span renders the props received in the function", () => {
    render(<AmountOfPaints inkQuantity={40} />);
    expect(screen.getByTestId("number-display")).toHaveTextContent("Quantidade de tinta necessária: 40 litro(s)");
  });      
});
  