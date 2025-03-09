// Get references to the button and labels
const myButton = document.getElementById("myButton");

const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");

const min = 1
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

// Function that executes when the button is clicked
myButton.onclick = function(){

    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    
    // Display the random numbers in the labels
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
}

