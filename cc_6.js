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




// Task 3 - Arrow Function

// Setting up the arrow function to determine bonus

const calculateBonus = (salary, performanceRating) => {
    let bonusPercentage

    switch (performanceRating) {
        case "Excellent":
            bonusPercentage = 0.20;
            break;
        case "Good":
            bonusPercentage = 0.10;
            break;
        case "Average":
            bonusPercentage = 0.05
            break;
        default:
            bonusPercentage = 0
            break;
    }

    return salary * bonusPercentage;
};

// Setting up values to use with our arrow function to determine the bonus amount

const salary = 70000;
const performanceRating = "Excellent";
console.log(`Bonus increase after getting an Excellent rating: $${calculateBonus(salary, performanceRating)}`);     // Output: Bonus increase after getting an Excellent rating: $14000