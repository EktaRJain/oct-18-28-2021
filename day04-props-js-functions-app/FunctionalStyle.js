//The functions have the data
//You pass the logic or behavior into them
class ModernCalculator {
    constructor(a, b) {
        this.num1 = a;
        this.num2 = b;
    }
    calculate(behavior) {
        behavior(this.num1, this.num2);
    }
}

let modernCalc = new ModernCalculator(10, 20);
modernCalc.calculate(function(a, b) {
    console.log(a+b);
});
modernCalc.calculate(function(a, b) {
    console.log(a-b);
});
modernCalc.calculate(function(a, b) {
    console.log(a*b);
});
modernCalc.calculate(function(a, b) {
    console.log(a/b);
});