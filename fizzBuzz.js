/* Script for running the infamous fizzBuzz question, on running will print fizz, buzz, or fizzbuzz depending on given constraints for a set number of times, storing results in the output array and logging them into console*/
var output = [];
var count = 1;

 function fizzBuzz(timeToRun){
     while(count <= timesToRun ){
         if(count % 3 === 0 && count % 5 === 0) {
         output.push("FizzBuzz");
     } else if ( count % 5 === 0){
         output.push("Buzz");
     } else if(count % 3 === 0){
         output.push("Fizz");
     } else {
         output.push(count);
     }
     count++;
     }

   console.log(output);

 }
