// Get all table cells that correspond to the column with aria-colindex="6"
const paymentDates = document.querySelectorAll('td[aria-colindex="4"]');
const dividendCells = document.querySelectorAll('td[aria-colindex="6"]');

// Create an array to store the numeric values
const dividendArray = [];

let i = 0;
// Iterate through each cell, convert the text content to a number, and add it to the array
dividendCells.forEach(cell => {
    const year = paymentDates[i].textContent.trim().slice(-4);
    const dividend = parseFloat(cell.textContent.trim());
    if (!isNaN(dividend)) {
        dividendArray.push({ year, dividend });
    }
    i++;
});

// Print out the array
console.log(JSON.stringify(dividendArray));

