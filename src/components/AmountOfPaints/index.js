import React from "react";
import InkQuantityRules from "../../utils/InkQuantityRules";
import { Div } from "../AmountOfPaints/style";

export default function AmountOfPaints({inkQuantity}) {

    return (
        <Div>
            <span>{`Quantidade de tinta necessária: ${inkQuantity} litro(s)`}</span>
            {InkQuantityRules(inkQuantity)}
        </Div>
    );
} 