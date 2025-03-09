// Get button elements by their IDs
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

// Get the label element where the count is displayed
const countLabel = document.getElementById("countLabel");

let count = 0;

// Event listener for the "Increase" button
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

// Event listener for the "Reset" button
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

// Event listener for the "Decrease" button
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}