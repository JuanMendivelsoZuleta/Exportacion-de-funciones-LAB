export function costCalculator(input) {
    const comision = 3
    const interes = 0.01 * input
    return input + comision +interes
    
}

console.log(costCalculator(124));
