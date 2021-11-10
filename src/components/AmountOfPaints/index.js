import React from "react";
import InkQuantityRules from "../../utils/InkQuantityRules";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Div, Span, Button } from "../AmountOfPaints/style";

export default function AmountOfPaints({inkQuantity}) {
    
    function handleClose() {
        window.location.reload();
    }

    return (
        <Div>
            <Span>{`Quantidade de tinta necessária: ${inkQuantity} litro(s)`}</Span>
            {InkQuantityRules(inkQuantity)}
            <Button
                onClick={() => handleClose()}
                type="button"
            >
                <AiOutlineCloseCircle/>
            </Button>
        </Div>
    );
} 