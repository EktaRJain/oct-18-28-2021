console.log("hello TS");
var str;
var i = 10;
str = "hello";
var b = true;
var even = [12, 2, 6];
var langs = ["java", "js"];
var car = { model: "BMW", price: 923847 };
var add = function (a, b) { return a + b; };
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var p1 = new Person("Sam", 12);
console.log(p1.name, p1.age);
//p1.age = 12;
