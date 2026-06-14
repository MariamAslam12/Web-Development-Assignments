var add = 2 + 6;
document.write("Sum of 2 and 6 is " + add);
var subt = (2- 6);
document.write("<br> Subtraction of 2 and 6 is " + subt) ;
var multiply = (2 * 6);
document.write("<br> Multiplication of 2 and 6 is " + multiply) ;
var divide = (2 / 6);
document.write("<br> Division od 2 and 6 is " + divide) ;
var modulus = (2 % 6);
document.write("<br> Modulus of 2 and 6 is " + modulus) ;
var expression =
document.write("<br> Value after variable declaration is " + expression) ;
var numb = 5 ;
document.write("<br>Initial value: " + numb) ; //5
document.write("<br>Value after increment is:  " + (++numb)) ;//6
document.write("<br>Value after addition is:  " + (numb + 7)) ; //13
document.write("<br>Value after decrement is:  " + (--numb + 7)) ; //12
document.write("<br>Value after decrement is:  " + (12 % 3)) ; //0
var ticket = 600;
document.write("<br> Toatal cost to buy 5 tickets to a movie is " + ticket * 5 + " Pkr");
var table = 4;
document.write("<br>Table of 4 <br>" + "4 x 1 = " + table );
document.write( " <br> 4 x 2 = " + (table *2) );
document.write( " <br> 4 x 3 = " + (table *3) );
document.write( " <br> 4 x 4 = " + (table *4) );
document.write( " <br> 4 x 5 = " + (table *5) );
document.write( " <br> 4 x 6 = " + (table *6) );
document.write( " <br> 4 x 7 = " + (table *7) );
document.write( " <br> 4 x 8 = " + (table *8) );
document.write( " <br> 4 x 9 = " + (table *9) );
document.write( " <br> 4 x 10 = " + (table *10) );
var celsistemp = 25;
document.write(" <br>" +celsistemp + "°C is " + (celsistemp * 9 / 5 + 32) + "°F<br>" );
var ferintemp = 70 ;
document.write(ferintemp + "°F is " + ((ferintemp - 32) * 5/ 9 ) + "°C<br>" );
var item1 = 650;
var item2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var charges = 100;
document.write("<h1> Shopping Cart </h1><br> Price of item 1 is " + item1 + "<br> Quantity of item 1 is "+ quantity1 + "<br>Price of item 2 is " + item2 + "<br> Quantity of item 2 is "+ quantity2  + "<br> Shipping charges is " + charges);
document.write( "<br>Total cost of your order is" + (item1*quantity1 + item2*quantity2 + charges));
var totalmarks = 980;
var markobt = 804;
document.write("<h2>Marks Sheet </h2> <br>Total Marks is " + totalmarks + " <br>Obtained marks is "+ markobt + "<br> Percentage is " + (markobt / totalmarks * 100))
var dollar = 104.80;
var riyal = 28;
document.write("<h2>Currency in PKR </h2>" +"Total currency in Pkr: " + (10* dollar + 25 * riyal));

var number = 4;
document.write("<br>adding 4 into 5 is " + (number +5) + "<br>multiply 4 by 10 is " + (number * 10) +"<br>divide 40 by 2 is " + (40 / 2));
var currentyear = 2016;
var birthyear = 1992;
document.write("<h2>Age Calculator</h2>" +"Current year is: " + currentyear + "<br> Birth year is: "+ birthyear + " <br> your age is: " + (currentyear-birthyear));

var radius = 20
document.write("<h2> The Geometrizer </h2> Radius of circle is : " + radius + "<br> Circumferrence is: " + (2 * 3.142 * radius) + "<br> The area is : " + (3.142 * (radius * radius)) );
var snack = "chocolate";
var age = 15;
var maximumage = 65;
var snackper = 3;
document.write("<h2> The Lifetime Supply Calculator </h2> Favourite Snacks: " +  snack + "<br>Current age : " + age + "<br> Estimated  maximum age : "  + maximumage + "<br> amount snacks per day " + snackper + "<br> You will need  " + ((maximumage - age )  * snackper)  + "  to last you until the ripe old age of " + maximumage);
