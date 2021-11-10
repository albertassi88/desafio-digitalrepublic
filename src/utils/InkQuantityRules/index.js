export default function InkQuantityRules(wallInformation) {
    const litro18 = 18;
    const litro3_6 = 3.6;
    const litro2_5 = 2.5;
    const litro0_5 = 0.5;
    
    let quant18 = 0;
    let quant3_6 = 0;
    let quant2_5 = 0;
    let quant0_5 = 0;    
    
    for (let x=wallInformation; x > 0; x=wallInformation) {
        if (wallInformation >= litro18) {
            quant18 += 1;
            wallInformation -= litro18;
        } else if (wallInformation >= litro3_6) {
            quant3_6 += 1;
            wallInformation -= litro3_6;
        } else if (wallInformation >= litro2_5) {
            quant2_5 += 1;
            wallInformation -= litro2_5;
        } else if (wallInformation >= litro0_5) {
            quant0_5 += 1;
            wallInformation -= litro0_5;
        } else {
            quant0_5 += 1;
            wallInformation -= litro0_5;
        }
    }
    return (console.log(quant18, quant3_6, quant2_5, quant0_5))
}



 