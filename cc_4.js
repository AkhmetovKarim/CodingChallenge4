//Task 1 - Customer Discounts

let purchaseAmount = 5000; //Declare variable purchaseAmount
//Apply discount if purchaseAmount > 100
let discount = 0;
if (purchaseAmount > 100) {
    discount = purchaseAmount * 0.2;
}    
let finalAmount = purchaseAmount - discount;
console.log(`Final amount after discount: $${finalAmount}`);

//Task 2 - Sales Report
let sales = [500, 600, 700, 800, 900]; //Declare an array
let totalSales = 0; //Initialize count variable
for (let i=0; i< sales.length; i++) { //Use a  for loop to calculate total sales
totalSales += sales[i];// Add each sale
}
console.log(`Total Sales: $${totalSales}`); //Log

//Task 3 - Inventory Depletion
let stock = 5; //Declare stock variable
while (stock > 0) { //Use a while loop to decrease stocj until reaches 0
    console.log(`Available Stock: ${stock}`);
    stock--; //Subtracts stock by 1
}
console.log("Stock is empty") //Log