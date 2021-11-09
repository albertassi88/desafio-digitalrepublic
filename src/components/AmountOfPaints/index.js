import React from "react";
import { Div } from "../AmountOfPaints/style";

export default function AmountOfPaints({number2}) {

    return (
        <Div>
            <span>{`Quantidade de tinta necessária: ${number2} litro(s)`}</span>
        </Div>
    );
} 