this.name = "Ram";
this.age = 34;

let person = {
    name: "Sam",
    age: 12,
    print() {
        console.log(this.name, this.age);
    },
    printInfo: () => {
        console.log(this.name, this.age);
    }
};
person.printInfo();