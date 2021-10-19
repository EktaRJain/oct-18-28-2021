let person = {
    name: 'Sam',
    age: 12
};
// let name = person.name;
// let age = person.age;
let {name, age} = person; //Object destructuring
console.log(name, age);

let model = "BMW";
let color = "Black";

let carOldStyle = {
    model: model,
    color: color
};
let car = { model, color }; //Relaxed syntax
console.log(car);