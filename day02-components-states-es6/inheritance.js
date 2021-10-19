class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work(hours) {
        console.log(`Employee ${this.name} works ${hours} hours`);
    }
}

class Manager extends Employee {
    constructor(name, salary, level) {
        super(name, salary);
    }
    work(hours) {
        super.work(hours);
        console.log(`Manager ${this.name} is in a meeting for ${hours} hours`);
    }
}

let m1 = new Manager("Sam", 10000, 12);
m1.work(10);