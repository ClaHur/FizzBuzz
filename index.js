//Simple
/* for(i=1;i<=100;i++){
    console.log(i%15==0?"FizzBuzz":i%5==0?"Buzz":i%3==0?"Fizz":i);
} */

//Less Simple
var log = "";
const prompt = require('prompt-sync')(); //Load prompt for NodeJS
var max = "";
while (!Number.isInteger(max)) {
    max = prompt('What number would you like to go up to?'); //Take user input for max value
    max = parseFloat(max);
    if (!Number.isInteger(max)) {
        console.log("Invalid input, please try again.") //Prompt user to enter another value if they don't enter an integer
    }
}
for (i = 1; i <= max; i++) {
    log = "";
    i % 3 == 0 ? log += "Fizz" : log;
    i % 5 == 0 ? log += "Buzz" : log;
    i % 7 == 0 ? log += "Bang" : log;
    i % 11 == 0 ? log = "Bong" : log;
    i % 13 == 0 ? log = log.includes("B") ? log.replace("B", "FezzB") : log + "Fezz" : log; //If 'B' exists, add Fezz before, else add to end.
    i % 17 == 0 ? log = log.match(/.{0,4}/g).reverse().join("") : log; //Split string into groups of 4, reverse the array and join it together again
    log == "" ? log = i : log;
    console.log(log);
}
