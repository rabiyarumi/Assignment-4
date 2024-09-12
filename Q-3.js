function checkDigitsInName(name) {
    if (typeof name !== 'string'){
        return 'Invalid Input';
    }
    for (let i of name){
        if(!isNaN(i)){
            return true;
        }
    }
    return false;
}
console.log(checkDigitsInName("Raj12"))
console.log(checkDigitsInName("n9ayeem"))
console.log(checkDigitsInName("e1mu3"))
console.log(checkDigitsInName("Suman"))
console.log(checkDigitsInName("!@#"))
console.log(checkDigitsInName(["Name"]))
console.log(checkDigitsInName("!@#"))
console.log(checkDigitsInName("Name2024"))
console.log(checkDigitsInName("Name 2024"))
