import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MessageRules from ".";

describe("test the MessageRules component", () => {     
    test("verify that the span renders the props received in the function", () => {
        render(<MessageRules message={"A Parede tem que ter...."} />)
        expect(screen.getByTestId('message')).toHaveTextContent('A Parede tem que ter....')
    });  
});
  