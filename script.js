// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
// var city =prompt("Enter your City name");
// if(city=="KARACHI" || city=="Karachi" || city=="karachi"){
//     alert("Welcome to city of lights");
// }


// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
// var gender = prompt("Please enter your Gender." );
// if(gender=="MALE" || gender=="Male" || gender=="male"){
//     alert("Good Morning Sir.");
// }else if(gender=="FEMALE" || gender=="Female" || gender=="female"){
//     alert("Good Morning Ma’am.");
// }


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// var color = prompt("enter a color of road traffic signal.");
// if(color == "RED" || color == "Red" || color == "red"){
//     alert("Must stop");
// }else if (color == "YELOW" || color == "Yellow" || color == "yellow"){
//     alert("Ready to move");
// }else  if(color == "GREEN" || color == "Green" || color == "green"){
//     alert("move now");
// }
// else{
//     alert("Please enter a right color of road traffic signal.")
// }


// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
// var fuel = prompt("Please enter remaining fuel in car (in litres)");
// if(fuel <0.25){
//     alert("Please refill the fuel in your car");
// }



// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// alert message will be displayed because given condition is true.

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// alert message will not be displayed because given condition is false.

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// // condition 1 will not be displayed.
// if (c === 13){
// alert("condition 2 is true");
// }
// // condition 2 is true
// if (++c < 14){
// alert("condition 3 is true");
// }
// // condition 3 will not be displayed.
// if(c === 14){
// alert("condition 4 is true");
// }
// condition 4 is true

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

//  if (true){
//     alert("True");
// }
//  if (false){
//     alert("False");
// }
// True (condition is true)

// if("car" < "cat"){
//         alert("car is smaller than cat");
// }
// // car is smaller than cat (will be displayed)
        

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
// document.write("<h1>Mark Sheet</h1>  <br> <br> <br>");
// var totalMarks =300;
// var marks1, marks2, marks3;
// marks1 =64;
// marks2 =80;
// marks3=75;
// var total_obtained=marks1+ marks2+ marks3;
// var percentage = (total_obtained / totalMarks) * 100;
// document.write(`Total Marks : ${totalMarks} <br>`);
// document.write(`Marks Obtained : ${total_obtained} <br>`);
// document.write(`Percentage : ${percentage} <br>`);
// var grade, remarks;
// if(percentage>=80){
//         grade = "A-one";
//         remarks = "Excellent "
// } else if(percentage>=70){
//     grade = "A";
//     remarks = "Good"
// } else if(percentage>=60){
//     grade = "B";
//     remarks = "You need to improve"
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
//   }
// document.write(`Grade : ${grade} <br>`);
// document.write(`Remarks : ${remarks}`);


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var stNum = Math.floor(Math.random() * 10) + 1;

// var guess = (prompt("Guess the secret number (ranging from 1 to 10):"));

// if (guess === stNum) { 
//     alert("Bingo! Correct answer"); 
// } else if (guess + 1 === stNum || guess - 1 === stNum) { 
//     alert("Close enough to the correct answer");
//  } else {
//      alert("Sorry, wrong guess. The correct answer was " + stNum);
//  }


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var number =prompt("Please enter any number to check it is divisible by 3 or not.")
// if (number % 3 === 0) {
//     alert("The number is divisible by 3!");
//   } else {
//     alert("The number is not divisible by 3.");
//   }


// 9. Write a program that checks whether the given input is an
// even number or an odd number

// var input = prompt("Enter a number:");

// var number = +input;

// if (number % 2 === 0) {
//     alert("The number is an even number.");
//   } else {
//     alert("The number is an odd number.");
//   }


//   10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temperature = prompt("Enter temperature");
// if (temperature > 40) {
//     alert("It is too hot outside.");
//   } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
//   } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
//   } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
//   } else {
//     alert("It's too cold Today!");
//   }


// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;

if (operation === "+") {
  result = firstNumber + secondNumber;
} else if (operation === "-") {
  result = firstNumber - secondNumber;
} else if (operation === "*") {
  result = firstNumber * secondNumber;
} else if (operation === "/") {
    result = firstNumber / secondNumber;
} else if (operation === "%") {
  result = firstNumber % secondNumber;
} else {
  result = "Invalid operation!";
}

alert("The result is: " + result);