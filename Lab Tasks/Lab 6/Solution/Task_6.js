// Explanations For Functions

// Summary
// includes(): Checks if a value exists in an array.
// every(): Checks if all elements satisfy a condition.
// filter(): Creates a new array with elements that pass a condition.
// join(): Combines array elements into a string.
// some(): Checks if at least one element satisfies a condition.
// splice(): Modifies the array by adding/removing elements.


// 1 includes()
// The includes() fucntion searches through an array returns True or False 
// can also give fromIndex by default it is 0. 
// array.includes(value, fromIndex)


// 2 every()
// Checks a given condition on an array and returns true or false accordingly 
// Exampe
// const numbers = [1, 2, 3, 4, 5];
// const allPositive = numbers.every(num => num > 0);
// console.log(allPositive); 

// 3 filter()
// Creates a new array based on a condition for an orignal array and includes elements which return True
// Example
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// 4 join()
// joins elements of an array into a string and return string
// Example
// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join()); // Output: Fire,Air,Water

// 5 some()
// tests if atlesast 1 element in array passes the conditon
// Example
// const numbers = [-11, -22, -333, -4534, 5];
// const somePositive = numbers.some(num => num > 0);
// console.log(somePositive); // Output: true

// 6 splice()
// Modifies the array by adding/removing or replacing elements.
// Example
// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(2, 1, 6); startIndex then delete count then item to be added
// console.log(numbers); // Output: [1, 2, 6, 4, 5]


