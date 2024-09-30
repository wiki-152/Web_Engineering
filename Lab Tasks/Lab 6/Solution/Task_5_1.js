function capitalizeWords(str) {
    return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("hello world")); // Expected: "Hello World"


// The = in line was removed as falsely used. 

// .join(' ') was added to join the words else you get array of two words