// write a function that loops through an array of strings and numbers. 
// for every string, it should add an s to the end of the word 
// (for example, if the given word was apple, it would become apples)
// for every number, it should add 20 to the number. 
// return the changed array. 

const addSAnd20 = function (arr) {
    // your code here
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'string'){
            arr[i] += 's';
        } else if (typeof arr[i] === 'number'){
            arr[i] += 20;
        }
    }
    return arr;
}

console.log((addSAnd20([56, 'dog', 'apple', 'cheese', 45, 71])));
console.log((addSAnd20([56, 45, 71, 90, 28, 67])));
console.log((addSAnd20(['dog', 'apple', 'cheese']))); 


// console.log((addSAnd20([56, 'dog', 'apple', 'cheese', 45, 71]) === [76, 'dogs', 'apples', 'cheeses', 65, 91]) ? "Test 1: Passing" : "Test 1: Failing");

// console.log((addSAnd20([56, 45, 71, 90, 28, 67]) === [76, 65, 91, 110, 48, 87]) ? "Test 2: Passing" : "Test 2: Failing");

// console.log((addSAnd20(['dog', 'apple', 'cheese']) === ['dogs', 'apples', 'cheeses']) ? "Test 3: Passing" : "Test 3: Failing");