export default function MeasureRules(wallHeight, wallWidth, windowsQuantities, portQuantities, updateWallInformation) {
    const windowSize = 2.4;
    const portSize = 1.52;
    let wallSize = Number(wallHeight) * Number(wallWidth);
    let windowDoorSize = Number(windowsQuantities) * windowSize + Number(portQuantities) * portSize;
    if (wallSize < 1 || wallSize > 15) {
        return alert("A Parede tem que ter de 1 à 15 metros quadrados");  
    } else if (windowDoorSize > (wallSize/2)) {
        return alert("A área das portas e janelas não poder ter mais de 50% da área da parede");
    } else if (Number(portQuantities) > 0 && Number(wallHeight) < 1.82) {
        return alert("A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta");
    } else {
        updateWallInformation()
    } 
}