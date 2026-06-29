var studentliteral = [];
var studentobject = new Array ();

var stringarray = ["Fatima" , "Khatija" , "Sara"];
console.log(stringarray);

var numberarray = [2 , 5, 67 ,90 , 78];
console.log(numberarray);

var boolianarray = [true , false];
console.log(boolianarray);

var mixedarray = ["Saira" , 45 , "Fatima " , 34 , false , {}];
console.log(mixedarray);

var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
console.log(`Qualification :` , qualification);

var studentname = ["Bano" , "Sara" , "Amna"]
var studentscore = [300 , 450 , 350]
console.log(`Score of`, studentname[0] , `is` , studentscore[0] ,`Percentage is ` , (studentscore[0] / 500 * 100),"%", `\n Score of`, studentname[1] , `is` , studentscore[1] ,`Percentage is ` , (studentscore[1] / 500 * 100),"%", `\n Score of`, studentname[2] , `is` , studentscore[2] ,`Percentage is ` , (studentscore[2] / 500 * 100),"%"  );

// var colors = ["Yellow ", " Blue " , " Orange" , " Purple" , " Pink" , " Black "];
// document.writeln("<h3>Initial Array:</h3>" + colors + "<br><br>");
// var colortobegin =prompt("Enter a color to add to the beginning:" );
// colors.unshift(colortobegin);
// document.write("<h3>a. Added to the beginning:</h3>" + colors + "<br><br>");

// var colortoend = prompt("Enter a color to add to the end :");
// colors.push(colortoend);
// document.writeln("<h3>b. Added to the End :</h3>" + colors + "<br><br>");

// colors.unshift("Baby Pink " , "Orange")
// document.writeln("<h3>c. Added two more colors in the beginning :</h3>" + colors + "<br><br>");

// colors.pop();
// document.writeln("<h3>d. Deleted color in the end :</h3>" + colors + "<br><br>");

// var Addindex = prompt("At which index you want to add color? :");
// var newcolor = prompt("Enter a color name to add in that index :");
// colors.splice(Addindex , 0 , newcolor);
// document.writeln("<h3>e. Added color on the desired index :</h3>" + colors + "<br><br>");

// var deleteindex = prompt("At which index do you want to delete color(s)?");
// var deletecount = prompt("How many color you want to delete ?");
// colors.splice(deleteindex , deletecount);
// document.writeln("<h3>f. Deleted color on the desired index :</h3>" + colors + "<br><br>");

var studentscores = [320 , 230 , 480 , 120];
document.writeln(" Scores of student : " , studentscores);
studentscores.sort(function (a , b ){
    return a - b ;
});
document.writeln(" <br>Ordered Scores of Students: " + studentscores);

var cities = ["Karachi " , "Lahore" , "Quetta " ,"Islamabad ", "Rawalpindi"];
document.writeln("<br>Cities name is :" , cities);

var selectedcities = cities.slice(1 , 3);
document.writeln("<br> Selected Cities name is :" , selectedcities);

var arr = ["This ", " is ", " my ", " cat"];
document.writeln("<h3>Array : </h3>" , arr);
var singlestring = arr.join ("");
document.writeln("<h3>String : </h3>" , singlestring);

var devices =[];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Moniter");
document.write("<h3>Devices:</h3>" + devices.join(","));
var firstout = devices.shift();
document.writeln("<h5>Out:</hr><br>", firstout);
var secondout = devices.shift();
document.writeln("<h5>Out:</hr><br>", secondout);
var thirdout = devices.shift();
document.writeln("<h5>Out:</hr><br>", thirdout);
var forthout = devices.shift();
document.writeln("<h5>Out:</hr><br>", forthout);

var devices =[];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Moniter");
document.write("<h3>Devices:</h3>" + devices.join(","));
var firstout = devices.pop();
document.writeln("<h5>Out:</hr><br>", firstout);
var secondout = devices.pop();
document.writeln("<h5>Out:</hr><br>", secondout);
var thirdout = devices.pop();
document.writeln("<h5>Out:</hr><br>", thirdout);
var forthout = devices.pop();
document.writeln("<h5>Out:</hr><br>", forthout);

var manufacture = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" ,"Haier"];
document.writeln("<label><br><br> Choose a maufacture : </label>");
document.writeln("<select id = `brand`>")
document.write("<option value='" + manufacture[0] + "'>" + manufacture[0] + "</option>");
document.write("<option value='" + manufacture[1] + "'>" + manufacture[1] + "</option>");
document.write("<option value='" + manufacture[2] + "'>" + manufacture[2] + "</option>");
document.write("<option value='" + manufacture[3] + "'>" + manufacture[3] + "</option>");
document.write("<option value='" + manufacture[4] + "'>" + manufacture[4] + "</option>");
document.write("<option value='" + manufacture[5] + "'>" + manufacture[5] + "</option>");
document.writeln("</select>")