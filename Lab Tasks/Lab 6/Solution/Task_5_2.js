function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } 
    else if (num % 2 == 1) {
        return "Odd";
    }
    else {
        return "Invalid";
    }
}
console.log(isEvenOrOdd(4)); 
console.log(isEvenOrOdd(3));


// condition was wrong not num/2 and added extra condition for invalid input