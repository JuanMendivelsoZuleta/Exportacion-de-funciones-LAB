export function rubricPassFail(score) {
        if (score >= 5){
            return console.log('pass');
        }
        else{
            return console.log('fail'); 
       }
}
console.log(rubricPassFail(1));
