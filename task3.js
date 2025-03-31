export function ageCalculator(year, month, day) {
    if  (month <= 12 && day <= 31) {
        return 2025 - year;
    }
    else { return 2025 - year - 1;
    }   
}
console.log('Successful' + ageCalculator(2000, 12, 25));
 