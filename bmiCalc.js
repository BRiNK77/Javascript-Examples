/* Script for calculating a person's Body Mass Index (BMI), on running the user will be prompted to enter a given weight and height,once given a console log message will be returned*/

var givenWeight = prompt("Please enter a weight in kgs: ");
var givenHeight = prompt("Please enter a height in cm: ");

function bmiCalculator (weight, height) {
    var bmiNum = weight / Math.pow(2, height);
    var interpretation;

    // eat some, its good for you
    if(bmiNum < 18.5){
        interpretation = ("Your BMI is " + bmiNum + ", so you are underweight.");
    // noice
    }else if(bmiNum > 18.5 && bmiNum < 24.9){
        interpretation = ("Your BMI is " + bmiNum + ", so you have a normal weight.");
    // not my words
    }else if(bmiNum > 24.9){
        interpretation = ("Your BMI is " + bmiNum + ", so you are overweight.");
      }

    return interpretation;
  }
  console.log(bmiCalculator(givenWeight, givenHeight));
