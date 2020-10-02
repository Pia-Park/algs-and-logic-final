// Write a function that takes in a name and an age as arguments, 
// and returns a sentence containing both pieces of info
// ex. ('Jenny', 71) --> "Jenny is 71 years old!" 

const nameAndAge = function(name, age) {
    // your code here
    return `${name} is ${age} years old!`;    
}


console.log((nameAndAge('John', 27) === "John is 27 years old!") ? "Test 1: Passing" : "Test 1: Failing");

console.log((nameAndAge('Mary', 67) === "Mary is 67 years old!") ? "Test 2: Passing" : "Test 2: Failing");