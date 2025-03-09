function rollDice(){
    // Get the number of dice the user wants to roll from the input field
    const numOfDice = document.getElementById("numOfDice").value; 

     // Get the elements where we will display the dice results and images
    const diceResult = document.getElementById("diceResult");
    const diceImages =document.getElementById("diceImages");

    // Arrays to store dice values and corresponding image elements
    const values = [];
    const images = [];

    // Loop to generate random dice values and store images
    for(let i = 0; i < numOfDice; i++){
        // Generate a random number between 1 and 6 (inclusive)
        const value = Math.floor(Math.random() * 6) + 1;
        // Store the value in the array
        values.push(value);
        // Create an image tag for the corresponding dice face
        images.push(`<img src="Dice_images/${value}.png" alt="Dice ${value}">`);        
    }

    // Display the rolled dice values in text form
    diceResult.textContent = `dice: ${values.join(', ')}`;
    // Display the corresponding dice images
    diceImages.innerHTML = images.join('');
}