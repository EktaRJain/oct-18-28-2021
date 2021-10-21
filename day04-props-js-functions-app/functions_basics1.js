//All the function defintions are run first

//console.log(book);
//let book = '400 days';

console.log(eat('Bread'));

function eat(items) {
    return `Eating ${items}`;
}
console.log(eat());

//All functions are implicitly overloaded. You can invoke them by passing any number of arguments
function work() {
    console.log("Working", arguments);
}
work();
work(24, 7);
work(365, 'days');
work(false);

function add(num1, num2 = 10) {
    console.log(num1 + num2);
}
add(10);
add(120, 100);
add();

function sleep() {
    console.log("Sleeping peacefully");
}
function sleep(hours) {
    console.log(`Sleeping ${hours} hours`)
}

function sleep(hours, minutes) {
    console.log(`Sleeping ${hours} hours and ${minutes} mins`);
}


sleep();
