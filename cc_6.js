// Task 1 - Function Declaration

// Setting up the function to calculate total profits

function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return profit;
};

// Setting the values to use with the function

let sellingPrice = 200;
let costPrice = 100;
let unitsSold = 50;

let totalProfit = calculateProfit(costPrice, sellingPrice, unitsSold);

// Console-logging the end result

console.log(`Total Profit: $${totalProfit}`);                   // Output: Total Profit: $5000



// Task 2 - Function Expression

// Setting up the function to calculate sales tax

const calculateSalesTax = function(amount, taxRate) {
    return amount * taxRate;
};

// Creating values to use for the function

console.log(`10% Sales Tax of $500 is: $${calculateSalesTax(500, 0.10)}`);       // Output: 10% Sales Tax of $500 is $50