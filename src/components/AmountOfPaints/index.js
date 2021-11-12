import React from "react";
import InkQuantityRules from "../../utils/InkQuantityRules";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Div, Span, Button } from "../AmountOfPaints/style";

export default function AmountOfPaints({inkQuantity}) {
    
    function handleClose() {
        global.location.assign("/");
    }

    return (
        <Div>
            <Span data-testid="number-display">{`Quantidade de tinta necessária: ${inkQuantity} litro(s)`}</Span>
            {InkQuantityRules(inkQuantity)}
            <Button
                onClick={() => handleClose()}
                type="button"
                data-testid="reload-paints"
            >
                <AiOutlineCloseCircle/>
            </Button>
        </Div>
    );
} 