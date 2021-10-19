let numbers = [10, 20, 30];
for(let i=0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
let capitals = [];
capitals["India"] = "ND";
capitals["France"] = "Paris";
capitals["Spain"] = "Madrid";

for(let country in capitals) {
    console.log(country, capitals[country]);
}

let values = [true, 12.34, "hello"];