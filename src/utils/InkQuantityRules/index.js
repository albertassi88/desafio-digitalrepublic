import React from "react";
import QuantityRules from "../../components/QuantityRules";

export default function InkQuantityRules(wallInformation) {
    const liter18 = 18;
    const liter3_6 = 3.6;
    const liter2_5 = 2.5;
    const liter0_5 = 0.5;
    
    let quantity18 = 0;
    let quantity3_6 = 0;
    let quantity2_5 = 0;
    let quantity0_5 = 0;    
    
    for (let x=wallInformation; x > 0; x=wallInformation) {
        if (wallInformation >= liter18) {
            quantity18 += 1;
            wallInformation -= liter18;
        } else if (wallInformation >= liter3_6) {
            quantity3_6 += 1;
            wallInformation -= liter3_6;
        } else if (wallInformation >= liter2_5) {
            quantity2_5 += 1;
            wallInformation -= liter2_5;
        } else if (wallInformation >= liter0_5) {
            quantity0_5 += 1;
            wallInformation -= liter0_5;
        } else {
            quantity0_5 += 1;
            wallInformation -= liter0_5;
        }
    }
    
    return (
        <QuantityRules 
            quantity18={quantity18} 
            quantity3_6={quantity3_6} 
            quantity2_5={quantity2_5} 
            quantity0_5={quantity0_5}
        />
    );
}



 