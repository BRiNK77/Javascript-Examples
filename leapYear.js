/*Script for checking if a certain year is a leap year or not, on running the user will be prompted to enter a year, and a console log will be returned with the result*/
var givenYear = prompt("Please enter a year: ");
function isLeap(year){

var answer;
var calc1 = year % 4; // must be evenly / by 4
var calc2 = year % 100; // must not also be evenly / by 100
var calc3 = year % 400; // unless also evely / by 400

// first condition
if(calc1 === 0){
    answer = "Leap year.";

// unless second condition
} else if(calc2 === 0){
    answer = "Not leap year.";

// except for third condition
} else if (calc3 === 0){
    answer = "Leap year.";

// just no
} else {
    answer = "Not leap year.";
}

return answer;
}

console.log(isLeap(givenYear));
