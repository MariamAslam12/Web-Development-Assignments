var kidsmath = +prompt("What you wanna do first \n \n " 
    + "1. Forward Counting \n" 
    + "2. Backward Counting \n"
    + "3. Generate Table \n"
    + "Enter your Choice (1-3)"
);

let resultDisplay = document.getElementById("math-result");

if (kidsmath === 1) {
    var startnumb = +prompt("Where you want to start counting.");
    var endnumb = +prompt("Where you want to end counting.");
    var result = "";

    if (startnumb <= endnumb) {
        for (var i = startnumb; i <= endnumb ; i++) {
            result += `<span>${i}</span> `;
        }

        resultDisplay.innerHTML= `<h2 class="result-title">Forward Counting</h2><div class="numbers-grid">${result}</div>`;
   
    } else {
        alert("Error: Start number must be less than or equal to end number for forward counting!");
    }
} else if (kidsmath === 2) {
    var startnumb = +prompt("Where you want to start counting.");
    var endnumb = +prompt("Where you want to end counting.");
    var result = "";

    if (startnumb >= endnumb) {
        for (var i = startnumb; i >= endnumb ; i--) {
            result += `<span>${i}</span> `;
        }
        
        resultDisplay.innerHTML = `
        <h2 class="result-title">Backward Counting</h2>
        <div class="numbers-grid">${result}</div>
    `;
    } else {
        alert("Error: Start number must be less than or equal to end number for forward counting!");
    }
} else if (kidsmath === 3) {
    let tableNum = +prompt("Which table do you want?");
    let start = +prompt("Where do you want to start the table?");
    let end = +prompt("Where do you want to end it?");
    let result = "";

    for (let i = start; i <= end; i++) {
        result += `<div>${tableNum} x ${i} = ${tableNum * i}</div>`;
    }
    resultDisplay.innerHTML = `<h2 class="result-title">Table of ${tableNum}</h2><div class="table-grid">${result}</div>`;

} else {
    resultDisplay.innerHTML = `<p class="error">Invalid choice! Please refresh the page.</p>`;
}