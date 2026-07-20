// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// alert(`Greeting to ${firstName} ${lastName}`)

// var phoneModel = prompt("What is your favorite mbile phone model");
// var inputLenght = phoneModel.length;
// document.writeln(`My favorite phone is : ${phoneModel} <br>`);
// document.writeln(`Lenght of string is : ${inputLenght} `);

// var string = "Pakistan";
// var nString = string.indexOf("n")
// document.writeln(`String : ${string} <br> Index of 'n' is : ${nString}`);

// var string2 = "Hello World";
// var lastIndex = 0;

// for (let i = string2.length-1; i >= 0; i--) {
//   if (string2[i] === "l") {
//                 lastIndex = i; 
//                 break;        
//   }
// }
// document.writeln(`String : ${string2} <br> Index of 'n' is : ${lastIndex}`);


// var word = "Pakistani"
// var letter = word.charAt(3)

// document.writeln(`String : ${word} <br> Character at index 3 : ${letter}`)


// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" " , lastName)
// var Greeting = "Greeting to ".concat(fullName)
// alert(Greeting)

// var city = "Hyderabad"
// var afterreplace = city.replace("Hyder" , "Islam")
// document.writeln(`City : ${city} <br> After Replacement : ${afterreplace}`)


// var message = "Ali and Sami are best friends. They play cricket and football together";
// var messagereplace = message.replace(/and/g , "&");
// document.writeln(`City : ${message} <br> After Replacement : ${messagereplace}`);

// var value = "472";
// document.write("Value: " + value + "<br>");
// document.write("Type: " + typeof value + "<br>");

// var numb = Number(value)
// document.write("Value: " + numb + "<br>");
// document.write("Type: " + typeof numb + "<br>");


// var usetinput = prompt("Write anything in small letters ")
// if (usetinput) {
// var text = usetinput.toLocaleUpperCase();
// }
// document.writeln(`User Input : ${usetinput} <br> Upper Case : ${text}`)


// var userinput = prompt("Write anything in small letters ")
// if (userinput) {
// var tittleCase = userinput.charAt(0).toLocaleUpperCase() + userinput.slice(1).toLocaleLowerCase();
// }
// document.writeln(`User Input : ${userinput} <br> Upper Case : ${tittleCase}`)


// var num = 35.36 ; 
// var numString = num.toString();
// var result = numString.replace(".", "");
// document.writeln(`Number : ${numString} <br> Result : ${result}`)


// function validUsername(){
//     var isvalid = false;
//     var username = "";

//     while (!isvalid) {
//         username = prompt("Enter your username :")
    
//         if (!username) {
//             alert("Username cannot be empty. Enter a valid username");
//             continue;
//         }
//         var specialnumber = false;

//         for (let i = 0; i < username.length; i++) {
//             var charcode = username.charCodeAt(i);

//             if (charcode === 33 || charcode === 44 || charcode === 46 ||charcode === 64) {
//                 specialnumber = true;
//                 break;
//             }
            
//         }
//         if (specialnumber) {
//             alert("Please enter a valid number")
//         } else {
//             isvalid =true
//         }
//     }
//    document.writeln(`Stored username : ${username}`)

// }
// validUsername();


// var isvalid = false;
// var password = "";

// while (!isvalid) {
//   password = prompt("Enter your password :")

//   if (!password) {
//     alert("Username cannot be empty. Enter a valid username");
//     continue;
//   }
//   if (password.length < 6) {
//     alert("Password must be atleast 6 character long. enter a correct password");
//     continue;
//   }

//   var firstCharcode = password.charCodeAt(0);
//   if (firstCharcode >= 48 && firstCharcode <= 57 ) {
//     alert("Password cannot start with number. \n please enter a valid password");
//     continue;
//   }
//   var alphabet = false;
//   var numbers = false;

//   for (var i = 0; i < password.length; i++) {
//     var code = password.charCodeAt(i);

//     if (code >= 48 && code <= 57 ) {
//         numbers = true;
//     }
//     else if ((code >= 65 && code<= 90) || (code >= 97 && code <=122)) {
//        alphabet = true ;

//     } 
//   }

//   if (alphabet && numbers) {
//     isvalid =true;
//   } else {
//     alert("Password must contain both alphabets and numbers.\nPlease enter a valid password.")
//   }
// }
// document.write("Password successfully set!");


// var university = "University of Karachi"
// var universityArray = university.split("")

// for (let i = 0; i < universityArray.length; i++) {
//    document.writeln(universityArray[i] + "<br>")
    
// }

// var userInput = prompt("Write a word :");

// var lastChar = userInput.charAt(userInput.length - 1)

// document.writeln(`User Input : ${userInput} <br> Last Character of input : ${lastChar}`)


var string = "The quick brown fox jumps over the lazy dog";
var words = string.split(" ");

var count = 0;

for (let i = 0; i < words.length; i++) {
    
    if (words[i].toLowerCase() === "the") {
        count++ ;

    }
    
}
 document.writeln(` Text ${string} <br>  There are ${count} occurence of  word "the"`)