const weightEntered = prompt("Enter weight in kilograms");
const heightEntered = prompt("Enter height in centimeters");

// Converting values to numbers because the prompt returns a string
weight = parseFloat(weightEntered);
height = parseFloat(heightEntered) / 100; // Convert height to meters

const bmi = weight / Math.pow(height, 2); //Math.pow() method raises the height value to the power of 2
const bmiFixed = bmi.toFixed(1); //Rounding to one decimal place

console.log(bmiFixed);


//You can also add + before weight and height instead of parseFloat()