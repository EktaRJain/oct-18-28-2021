class Person {
    //CANNOT DEFINE VARIABLES HERE
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat(items) {
        console.log(this.name + " is eating " + items);
    }
}

let p1 = new Person("Sam", 12);
console.log(p1.name, p1.age);
p1.eat("Rice");

let p2 = new Person("Ram", 23);
console.log(p2);

p1 = p2;
console.log(p1, p2);