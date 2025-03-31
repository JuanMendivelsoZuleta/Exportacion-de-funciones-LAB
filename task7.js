export function rubricPerfect(score) {
    if(score === 11 ){
        return console.log('Perfect');    
    }
    else if (score > 8){
        return console.log('Excellent');
    }
    else if (score >= 5 )
        return console.log('Pass');
    else if(score < 5){
        return console.log('Fail'); 
    }
   
}
console.log(rubricPerfect(11));
console.log(rubricPerfect(9));
console.log(rubricPerfect(8));
console.log(rubricPerfect(5));
console.log(rubricPerfect(3));

