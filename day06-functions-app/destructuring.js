let person = { name: "Sam", age: 12};
let {name, age} = person; //Object destructuring

let numbers = [12, 23, 45, 56, 78];
let [a, b, _, c] = numbers; //Array destructuring

// let a = numbers[0];
// let b = numbers[1];
// let c = numbers[2];
console.log(a, b, c);
