import React from "react";
import { GrPaint } from 'react-icons/gr';
import { Div, Span } from "../../components/QuantityRules/style";

export default function QuantityRules({quantity18, quantity3_6, quantity2_5, quantity0_5}) {
    return (
        <Div>
            {quantity18 !== 0 && <Span><GrPaint /> {`${quantity18} lata(s) de 18 Litros`}</Span>}
            {quantity3_6 !== 0 && <Span><GrPaint /> {`${quantity3_6} lata(s) de 3.6 Litros`}</Span>}
            {quantity2_5 !== 0 && <Span><GrPaint /> {`${quantity2_5} lata(s) de 2.5 Litros`}</Span>}
            {quantity0_5 !== 0 && <Span><GrPaint /> {`${quantity0_5} lata(s) de 0.5 Litros`}</Span>}
        </Div>
    )
}
