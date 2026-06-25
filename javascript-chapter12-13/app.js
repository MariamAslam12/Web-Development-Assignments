
var character = "5"; 

if (typeof character !== "string" || character.length !== 1) {
    console.log("Please enter exactly one character.");
} else {
   
    var asciiVal = character.charCodeAt(0);
    if (asciiVal >= 48 && asciiVal <= 57) {
        console.log(`'${character}' is a number.`);
    }
    else if (asciiVal >= 65 && asciiVal <= 90) {
        console.log(`'${character}' is an uppercase letter.`);
    }

    else if (asciiVal >= 97 && asciiVal <= 122) {
        console.log(`'${character}' is a lowercase letter.`);
    }
    else {
        console.log(`'${character}' is a special character or symbol.`);
    }
}

var num1 = 15 ;
var num2 = 20 ;
if (num1 === num2) {
    console.log("Both numbers are equal");
}
    else if (num1 > num2) {
        console.log(`The larger number is ${num1} `);
        
    } else {
        console.log(`The larger number is : ${num2}`);
        
    }
// var numinput = +prompt("Enter a Number : ")
// if (numinput > 0) {
//     console.log(` ${numinput} is a positive number`);
    
// }
// else if (numinput < 0) {
//     console.log(` ${numinput} is a negative number`);
    
// }
// else {
//     alert("The number is zero.");
// }
// var character = prompt("Enter a Character :")
// if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u" && character.length== 1) {
//     alert("it is a vowel.")
 
// }
//  else {
//     alert("false")
// }
// var password = "123may$%"
// var passwords = prompt("Enter your passsword")
// if (password === passwords) {
//     alert("Correct! The password you entered matches the original password")
// }
// else if (password !== passwords) {
//     alert("password is incorrect")
// } else {
//     alert("Enter again")
// }
// var greeting; 
// var hour = 13; 

// if (hour < 18) { 
//     greeting = "Good day"; 
// } else { 
//     greeting = "Good evening"; 
// }
// console.log(greeting);


// var  originalinput = prompt("write time in 24 hours clock format (e.g., 1900)");
// if (originalinput === null || originalinput.length !== 4) {
//     alert("Enter correct time (Must be 4 digits, like 0029 or 1900)");
// }
// else {
//     var timeinput = originalinput;
// if (timeinput >= 0 && timeinput < 1200) {
//     alert("Good morning!");
// }
// else if (timeinput >= 1200 && timeinput < 1700) {
//     alert("Good afternoon!");
// }
// else if (timeinput >= 1700 && timeinput < 2100) {
//     alert("Good evening!");
// }
// else if (timeinput >= 2100 && timeinput <= 2359) {
//     alert("Good night!");
// }
// else{
//     alert("Enter correct time")
// }
// }




