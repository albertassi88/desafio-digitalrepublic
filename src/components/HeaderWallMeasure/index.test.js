import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderWallMeasure from ".";

describe("test the HeaderWallMeasure component", () => {
  beforeEach(() => {
    render(<HeaderWallMeasure />);
  });
  
  it("check if the phrase in h2 appears on the screen", () => {
    const phrase = screen.getByText("Qual a área de pintura?");
    expect(phrase).toBeInTheDocument();      
  });  

  it("check if the phrase in h3 appears on the screen", () => {
    const phrase = screen.getByText("Informe abaixo os tamanhos (áreas) do local que você vai pintar:");
    expect(phrase).toBeInTheDocument();      
  });  

  it("check if the phrase in Span appears on the screen", () => {
    const phrase = screen.getByText("É necessário preencher os campos para calcular a área.");
    expect(phrase).toBeInTheDocument();      
  });  
});
  