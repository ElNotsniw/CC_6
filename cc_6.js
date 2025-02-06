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

console.log("Total Profit: " + totalProfit);