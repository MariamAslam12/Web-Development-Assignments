var multidimensional = [[[[]]]];

var multiarray = [0,1,2,3, [1,0,1,2, [2,1,0,1]]];
document.writeln("this is a multi array" , multiarray)


for (var i = 0 ; i <= 10 ; i++){
    document.writeln( "<br>" , i ,"<br>" )
}

// var tableNumber = +prompt("Enter a number to show its multiplication table :");
// var lenghtNumber = +prompt("Enter lenght multiplication table");
// document.write("<h3>Multiplication table of" + tableNumber + "</h3>");
// document.write("<h3>Lenght of table" + lenghtNumber + "</h3>");
// for(i=1 ; i <=lenghtNumber ; i++){
//     var result = tableNumber * i;
//     document.write("<br>" + tableNumber + " x " + i + " = " + result + "<br>");
// }
// var fruits = ["apple", "banana", "mango", "Orange", "Strawberry"]
// for(i=0 ; i<=fruits.length ; i++){
//     document.write(fruits[i] + "<br>")
// }
// for(i=0 ; i<=fruits.length ; i++){
//     document.write("<br>Element at index " ,i , " is " , fruits[i] , "<br>")
// };

// var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
// document.write("<h3>Counting : </h3>" , counting);


// document.write("<h3>b. Reverse counting:</h3>");
// var reverseCount =[];
// for (let i = 15; i >= 1; i--) {
//     reverseCount.push(i);
// }
// document.write(reverseCount.join(", ") + "<br><br>");

// document.write("<h3>c. Even counting:</h3>");
// var evenCount =[];
// for (let i = 0; i <=20 ; i +=2) {
//     evenCount.push(i);
// }
// document.write(evenCount.join(", ") + "<br><br>");

// document.write("<h3>d. Odd counting:</h3>");
// var oddCount =[];
// for (let i = 1; i <=19 ; i +=2) {
//     oddCount.push(i);
// }
// document.write(oddCount.join(", ") + "<br><br>");

// document.write("<h3>d. Series counting:</h3>");
// var seriesCount =[];
// for (let i = 2; i <=20 ; i +=2) {
//     seriesCount.push(i +"k");
// }
// document.write(seriesCount.join(", ") , "<br><br>");

//  var A = ["cake", "apple" , " pie" , "cookie", "chips","patties"] ;
//  var bakery = prompt("Welcome to ac bakery what do you want to order sir / mam")

//  let isFound = false;
// let foundIndex = -1;

//  for (i=0 ; i < A.length ; i++){
//    if(A [i] == bakery)
//     isFound = true;
//         foundIndex = i;

//  }
//  if (isFound) {
//     document.write(bakery , " is available at index " , foundIndex , " in our bakery ");
//  }
//  else{
//   document.write("We are sorry. " , bakery , " is not available in our bakery.")
//  }


A = [24, 53, 78, 91, 12];
document.write("<h3>Array items : </h3>" , A , "<br>") ;
var largestNumber = A[0];
for (var i = 1; i < A.length; i++) {
    if (A[i] > largestNumber) {
        largestNumber = A[i]; 
    }
}
document.write("The largest number is " , largestNumber , "<br><br>")

A = [24, 53, 78, 91, 12];
document.write("<h3>Array items : </h3>" , A , "<br>") ;
var smallestNumber = A[0];
for (var i = 1; i < A.length; i++) {
    if (A[i] > smallestNumber) {
    smallesttNumber = A[i]; 
    }
}
document.write("The smallest number is " , smallestNumber)

document.write("<h3>Multiple of 5" , "</h3>");
for(i=1; i <=100 ; i++){
if(i % 5 ==0){
    document.write(i ,"<br>");
}
}
