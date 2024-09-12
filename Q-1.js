function calculateTax( income, expense){
    if (typeof income !== "number" || typeof expense  !== "number" || income < 0 || expense < 0 || income < expense) {
        return "Invalid Input";
    }
    let profit = income - expense;
    let tax = profit * .20;
    return tax;
}
console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
 console.log(calculateTax(-5000, 2000));
 console.log(calculateTax(6000, -1500));