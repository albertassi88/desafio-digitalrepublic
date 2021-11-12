import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuantityRules from ".";

describe("test the QuantityRules component", () => {     
    test("check if span renders the props received from the function", () => {
        render(<QuantityRules quantity18={2} quantity3_6={0} quantity2_5={2} quantity0_5={0} />)
        expect(screen.getByTestId('quantity18')).toHaveTextContent("2 lata(s) de 18 Litros");
        expect(screen.getByTestId('quantity2_5')).toHaveTextContent("2 lata(s) de 2.5 Litros");
    });      
});
  