/*
Write a function that takes in a string and converts it into kebab case
(ex. ('Dogs are cute') ---> Dogs-Are-Cute) notice how every word 
becomes capitalized, and connected by a hyphen.
if the string passed in is an empty string, return 'This is an empty string!'

for this question, make a comment for every piece of the code, explaining
what it does and why.
*/

const kebabCase = function (str) {
    // your code here
    let newStr = str.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
    //make new string(because test number2 has a wierd string...) 
    // 1. change to lower case and split it 2. using charAt can change first letter to upper case
    // 3. and plus the left letters(using slice) 4.and! join it again, complete new string! 
    if(str === '') return 'This is an empty string!';
    // if str is empty, it returs "Thins is an empty string"   
    return newStr.replace(/ /gi, '-');
    // else! it returns new string, this time we have to change space to '-'. 
    // using replace! you have to plus'gi' after '//' because if you don't plus it, it only changes one time.
}


// console.log((kebabCase('Coding Is Fun'))); 

console.log((kebabCase('Coding Is Fun') === 'Coding-Is-Fun') ? "Test 1: Passing" : "Test 1: Failing");

console.log((kebabCase('this STrIng has Weird casing') === 'This-String-Has-Weird-Casing') ? "Test 2: Passing" : "Test 2: Failing");

console.log((kebabCase('') === 'This is an empty string!') ? "Test 3: Passing" : "Test 3: Failing");



