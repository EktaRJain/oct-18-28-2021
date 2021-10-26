let numbers = [11, 24, 63, 42, 15, 96, 30, 56, 84, 23, 100];

//1) Print all the numbers
numbers.forEach(num => console.log(num));

//2) Print the sum of all numbers
let sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log("Sum", sum);

//3) Print the first odd number
let firstOddNumber = numbers.find(num => num % 2 !== 0);
console.log("First odd number", firstOddNumber);

//4) Generate an list of squares of all numbers
let squaresLst = numbers.map(it => it * it);
console.log(squaresLst);

//5) Generate a list of numbers divisible by 5. 
let numbersDivBy5 = numbers.filter(it => it % 5 === 0);
console.log(numbersDivBy5);

//6) Print all the even numbers
numbers
    .filter(it => it % 2 === 0)
    .forEach(it => console.log(it));