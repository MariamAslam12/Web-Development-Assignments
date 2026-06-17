// var city = prompt("In which city you live");
// if (city =="karachi") {
//    document.write( "Welcome to city of lights ")
// };
// var gender = prompt("what is your gender");
// if (gender =="male") {
//     document.write(" Good Morning Sir. ");}
//  else if (gender =="female") {
//     document.write("Good Morning Ma’am.")
// };
// var signalColor = prompt("Enter the color of the road traffic signal (Red, Yellow, Green)");
// if (signalColor === "red") {
//         alert(" Must Stop");
//     } else if (signalColor === "yellow") {
//         alert(" Ready to move");
//     } else if (signalColor === "green") {
//         alert(" Move now");
//     } else {
//         alert("Invalid color entered. Please enter Red, Yellow, or Green.");
//     }
// var fuel = prompt("What is your current fuel in car ");
// if (fuel) {
//     if (fuel < 0.25) {
//         alert("Please refill the fuel in your car");
//     } else {
//         alert("You have sufficient fuel.");
//     }
// };
//  var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true")}; //This message displayed
// var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true")}; // not displayed becauase instead of 82 its written 83
//  var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 
// if (c === 13){ 
// alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 
// if(c === 14){ 
// alert("condition 4 is true"); } // condition 2 and 4 are correct 
//  var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals");}// it is true and displyed
//  if (true){ 
// alert("True"); 
// } 
// if (false){ 
// alert("False");} // displayed
// if("car" < "cat"){ 
// alert("car is smaller than cat"); 
// } // displayed 
// var name = (name = prompt("Enter Your Name : "));
// var firstSubject = prompt("Enter First Subject : ");
// var secondSubject = prompt("Enter Second Subject : ");
// var thirdSubject = prompt("Enter Third Subject : ");

// var total = 100;

// var firstObt = +prompt("Enter First Subject Marks : ");
// var secondObt = +prompt("Enter Second Subject Marks : ");
// var thirdObt = +prompt("Enter Third Subject Marks : ");

// var totalObt = firstObt + secondObt + thirdObt;

// var percent = (totalObt / 300) * 100;

// var grade = "";
// var remarks = "";
// var isPass = false; 

// if (percent > 0 && percent < 100) {
//   if (percent >= 80 && percent <= 90) {
//     grade = "A+";
//     isPass = true;
//     remarks = "Excellent"
//   } else if (percent >= 70 && percent <= 80) {
//     grade = "A";
//     isPass = true;
//       remarks = "Good"
//   } else if (percent >= 60 && percent <= 70) {
//     grade = "B";
//     isPass = true;
//       remarks = "Improvement"
//   } else if (percent >= 50 && percent <= 60) {
//     grade = "C";
//     isPass = true;
//       remarks = "You need to improve"
//   } else if (percent >= 45) {
//     grade = "D";
//     isPass = true;
//       remarks = "Bad"
//   } else {
//     grade = "F";
//     remarks = "Fail"
//   }
// } else {
//   alert("Invalid Input.....");
// }

// var check = "";

// if (isPass){
//     check = "Pass"
// }else{
    
//     check = "Fail"
// }

// document.write(`
//     <div class="marksheet-container">
//     <h2>Academic Statement of Marks</h2>

//     <!-- Student Information Block -->
//     <div class="student-info">
//         <div class="info-item"><strong>Student Name:</strong> ${name}</div>
//         <div class="info-item"><strong>Roll Number:</strong> 1024589</div>
//         <div class="info-item"><strong>Class / Grade:</strong> Grade 10</div>
//         <div class="info-item"><strong>Academic Year:</strong> 2035-2026</div>
//     </div>

//     <!-- Marksheet Table -->
//     <table>
//         <thead>
//             <tr>
//                 <th>Subject Name</th>
//                 <th>Marks Obtained</th>
//                 <th>Grade</th>
//                 <th>Remarks</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>${firstSubject}</td>
//                 <td>${firstObt}</td>
//                 <td>${grade}</td>
//                 <td>${remarks}</td>
//             </tr>
//             <tr>
//                 <td>${secondSubject}</td>
//                 <td>${secondObt}</td>
//                 <td>${grade}</td>
//                 <td>${remarks}</td>
//             </tr>
//             <tr>
//                 <td>${thirdSubject}</td>
//                 <td>${thirdObt}</td>
//                 <td>${grade}</td>
//                 <td>${remarks}</td>
//             </tr>
//             <!-- Total Row -->
//             <tr class="total-row">
//                 <td>Total</td>
//                 <td>${total * 3}</td>
//                 <td>${35 * 3}</td>
//                 <td>${totalObt}</td>
//             </tr>
//         </tbody>
//     </table>

//     <!-- Final Analytics Summary -->
//     <div class="summary-box">
//         <div>
//             <strong>Percentage:</strong> ${percent}%
//         </div>
//         <div>
//             <strong>Grade:</strong> ${grade}
//         </div>
//         <div class="result-status">
//             Final Status: <span class="pass-text">${check}</span>
//         </div>
//     </div>
// </div>
    
    
//     `);

// var userguess = prompt("Guess the secret number from 1 to 10")
// var secretnumb = 6;
// if (secretnumb == userguess) {
//     alert("Bingo! Correct answer")
// } else {
//     alert("Close enough to the correct answer")
    
// }
// var numberCheck = prompt("Enter a number to check divisibility by 3:");
// if ((numberCheck)) {
//     if (numberCheck % 3 === 0) {
//         alert("The number " + numberCheck + " is divisible by 3.");
//     } else {
//         alert("The number " + numberCheck + " is not divisible by 3.");
//     }
// } else {
//     alert("Please enter a valid number.");
// }
// var inputNumber = prompt("Enter a number to check if it's Even or Odd:");
// if ((inputNumber)) {
//     if (inputNumber % 2 === 0) {
//         alert(inputNumber + " is an even number.");
//     } else {
//         alert(inputNumber + " is an odd number.");
//     }
// } else {
//     alert("Please enter a valid number.");
// }

// var temperature =+prompt("Enter the current temperature:");

// if (temperature) {
//     if (temperature > 40) {
//         alert("It is too hot outside.");
//     } else if (temperature > 30) {
//         alert("The Weather today is Normal.");
//     } else if (temperature > 20) {
//         alert("Today’s Weather is cool.");
//     } else if (temperature > 10) {
//         alert("OMG! Today’s weather is so Cool.");
//     } else {
//         alert("It's freezing outside!");
//     }
// } else {
//     alert("Please enter a valid temperature value.");
// }


var firstNumber = prompt("Enter the first number:");
var secondNumber = prompt("Enter the second number:");
var operation = prompt("Enter the operation (+, -, *, /, %):");

var result= "";
if ((firstNumber) && (secondNumber)) {
    
    if (operation === "+") {
        result = firstNumber + secondNumber;
        alert("Result: " + firstNumber + " + " + secondNumber + " = " + result);
    } else if (operation === "-") {
        result = firstNumber - secondNumber;
        alert("Result: " + firstNumber + " - " + secondNumber + " = " + result);
    } else if (operation === "*") {
        result = firstNumber * secondNumber;
        alert("Result: " + firstNumber + " * " + secondNumber + " = " + result);
    } else if (operation === "/") {
        if (secondNumber !== 0) {
            result = firstNumber / secondNumber;
            alert("Result: " + firstNumber + " / " + secondNumber + " = " + result);
        } else {
            alert("Error: Division by zero is not allowed.");
        }
    } else if (operation === "%") {
        result = firstNumber % secondNumber;
        alert("Result: " + firstNumber + " % " + secondNumber + " = " + result);
    } else {
        alert("Invalid operator entered. Please use +, -, *, /, or %.");
    }

} else {
    alert("Please enter valid numeric values for the calculations.");
}