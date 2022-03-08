//console log numbers from 1 to 100, if multiple of 3 log 'fizz', if multiple of 5 log 'buzz', if multiple of both 'fizzbuzz'

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
    } else if(i % 5 === 0){
        console.log('buzz');
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else {
        console.log(i);
    }
}

