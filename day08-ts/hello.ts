console.log("hello TS");

let str: string;
let i: number = 10;
str = "hello";
let b: boolean = true;

let even: number[] = [12, 2, 6];
let langs: string[] = ["java", "js"];

type CarType = {
    model: string;
    price: number;
    color?: string;
}

let car: CarType = { model: "BMW", price: 923847 };

type Adder = (a: number, b:number) => number;
const add: Adder =  (a, b) => a + b;

class Person {
    private _name: string;
    private _age: number;
    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
    
    public get name() : string {
        return this._name;
    }
    public get age(): number {
        return this._age;
    }
}
let p1: Person = new Person("Sam", 12);
console.log(p1.name, p1.age);
//p1.age = 12;