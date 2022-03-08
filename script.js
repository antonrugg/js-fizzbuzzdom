//console log numbers from 1 to 100, if multiple of 3 log 'fizz', if multiple of 5 log 'buzz', if multiple of both 'fizzbuzz'

//create a div container in dom, append an element in html with the correct index and add different styles for 3, 5 and both multiples

const fizz = 'fizz';
const buzz = 'buzz';


const containerSquare = document.querySelector(".container");


for (let i = 1; i <= 100; i++){
  
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${fizz}${buzz}`);
        
        const element = `<div id="square-${i}" class="square">${fizz}${buzz}</div>`;
        containerSquare.innerHTML += element;
        document.getElementById('square-' + i).style.backgroundColor = "red";
        
    } else if(i % 5 === 0){
        console.log(`${buzz}`);
        const element = `<div id="square-${i}" class="square">${buzz}</div>`;
        containerSquare.innerHTML += element;
        document.getElementById('square-' + i).style.backgroundColor = "green";
    } else if (i % 3 === 0) {
        console.log(`${fizz}`);
        const element = `<div id="square-${i}" class="square">${fizz}</div>`;
        containerSquare.innerHTML += element;
        document.getElementById('square-' + i).style.backgroundColor = "pink";
    } else {
        console.log(i);
        const element = `<div id="square-${i}" class="square">${i}</div>`;
        containerSquare.innerHTML += element;
    }
}

