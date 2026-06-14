var a = 12;
document.write("<h3>Result</h3> The value of a is : " + a);
document.write("<br>The value of ++a is: " + (++a) + "<br>Now the value of a is : 13");
document.write("<br>The value of a++ is : " + (a++) + "<br>Now the value of a is : 14");
document.write("<br> The value of --a is : " + (--a) + "<br>Now the value of a is : 13");
document.write("<br> The value of a-- is : " + (a--) + "<br>Now the value of a is : 12");
var a = 2, b = 1; 
var result = --a - --b + ++b + b--;
a=2;
document.write("<h3>question 2 </h3>the output of a is "+ (--a) );
a=2 , b=1;
document.write("<br>the output of --a - --b  is "+ (--a - --b) );
a=2 , b=1 ;
document.write("<br>the output of --a - --b + ++b  is "+ (--a - --b + ++b) );
a=2 , b=1;
document.write("<br>the output of --a - --b + ++b + b-- result is "+ (--a - --b + ++b +b--) );
var username =prompt("what is your name")
alert("Hello " + username + " Welcome to website")
var numb = +prompt("Enter number")

if (numb == 4) {
    var table = 4;
document.write("<h3>Table of 4 </h3>" + "4 x 1 = " + table );
document.write( " <br> 4 x 2 = " + (table *2) );
document.write( " <br> 4 x 3 = " + (table *3) );
document.write( " <br> 4 x 4 = " + (table *4) );
document.write( " <br> 4 x 5 = " + (table *5) );
document.write( " <br> 4 x 6 = " + (table *6) );
document.write( " <br> 4 x 7 = " + (table *7) );
document.write( " <br> 4 x 8 = " + (table *8) );
document.write( " <br> 4 x 9 = " + (table *9) );
document.write( " <br> 4 x 10 = " + (table *10) );
}
else{
    var table = 5;
document.write("<h3>Table of 5 </h3>" + "5 x 1 = " + table );
document.write( " <br> 5 x 2 = " + (table *2) );
document.write( " <br> 5 x 3 = " + (table *3) );
document.write( " <br> 5 x 4 = " + (table *4) );
document.write( " <br> 5 x 5 = " + (table *5) );
document.write( " <br> 5 x 6 = " + (table *6) );
document.write( " <br> 5 x 7 = " + (table *7) );
document.write( " <br> 5 x 8 = " + (table *8) );
document.write( " <br> 5 x 9 = " + (table *9) );
document.write( " <br> 5 x 10 = " + (table *10) ); 
};
var name = (name = prompt("Enter Your Name : "));
var subject1 = prompt("Enter First Subject : ");
var subject2 = prompt("Enter First Subject : ");
var subject3 = prompt("Enter First Subject : ");
var total = 100
var firstobtain = +prompt("Enter First subject marks ")
var secondobtain = +prompt("Enter second subject marks ")
var thirdobtain = +prompt("Enter thirdsubject marks ")
var totalObt = firstobtain + secondobtain + thirdobtain;

var percent = (totalObt / 300) * 100;
document.write(`
    <div class="marksheet-container">
    <h2>Academic Statement of Marks</h2>

    <!-- Student Information Block -->
    <div class="student-info">
        <div class="info-item"><strong>Student Name:</strong> ${name}</div>
        <div class="info-item"><strong>Roll Number:</strong> 1024589</div>
        <div class="info-item"><strong>Class / Grade:</strong> Grade 10</div>
        <div class="info-item"><strong>Academic Year:</strong> 2035-2026</div>
    </div>

    <!-- Marksheet Table -->
    <table>
        <thead>
            <tr>
                <th>Subject Name</th>
                <th>Maximum Marks</th>
                <th>Marks Obtained</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${subject1}</td>
                <td>${total}</td>
                <td>${firstobtain}</td>
            </tr>
            <tr>
                <td>${subject2}</td>
                <td>${total}</td>
                <td>${secondobtain}</td>
            </tr>
            <tr>
                <td>${subject3}</td>
                <td>${total}</td>
                <td>${thirdobtain}</td>
            </tr>
            <!-- Total Row -->
            <tr class="total-row">
                <td>Total</td>
                <td>${total * 3}</td>
                <td>${totalObt}</td>
            </tr>
        </tbody>
    </table>

    <!-- Final Analytics Summary -->
    <div class="summary-box">
        <div>
            <strong>Percentage:</strong> ${percent}%
        </div>
    </div>
</div>
    
    
    `);