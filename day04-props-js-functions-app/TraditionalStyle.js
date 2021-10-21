//The functions have the logic
//You pass the data into them
class TraditionalCalculator {
    add(a, b) {
        console.log(a + b);
    }
    subtract(a, b) {
        console.log(a - b);
    }
    multiply(a, b) {
        console.log(a * b);
    }
    divide(a, b) {
        console.log(a/b);
    }
}

let calc = new TraditionalCalculator();
calc.add(10, 20);
calc.subtract(10, 20);
calc.add(110, 201);