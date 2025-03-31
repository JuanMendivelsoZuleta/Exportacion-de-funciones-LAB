export function rubricExcellent(score) {
    if (score > 8){
        return console.log('Excellent');
    }
    else if (score >= 5 )
        return console.log('Pass');
    else if(score < 5){
        return console.log('Fail'); 
    }
   
}
console.log(rubricExcellent(9));
