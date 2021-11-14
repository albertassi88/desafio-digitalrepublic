import React from "react";
import PropTypes from "prop-types";
import { GrPaint } from "react-icons/gr";
import { Div, Span } from "../../components/QuantityRules/style";

export default function QuantityRules({quantity18, quantity3_6, quantity2_5, quantity0_5}) {
  return (
    <Div>
      {quantity18 !== 0 && 
        <Span data-testid="quantity18">
          <GrPaint /> {`${quantity18} lata(s) de 18 Litros`}
        </Span>
      }
      {quantity3_6 !== 0 && 
        <Span data-testid="quantity3_6">
          <GrPaint /> {`${quantity3_6} lata(s) de 3.6 Litros`}
        </Span>
      }
      {quantity2_5 !== 0 && 
        <Span data-testid="quantity2_5">
          <GrPaint /> {`${quantity2_5} lata(s) de 2.5 Litros`}
        </Span>
      }
      {quantity0_5 !== 0 && 
        <Span data-testid="quantity0_5">
          <GrPaint /> {`${quantity0_5} lata(s) de 0.5 Litros`}
        </Span>
      }
    </Div>
  );
}

QuantityRules.propTypes = {
  quantity18: PropTypes.number,
  quantity3_6: PropTypes.number,
  quantity2_5: PropTypes.number,
  quantity0_5: PropTypes.number,
};
    
