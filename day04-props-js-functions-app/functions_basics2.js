let i = 10;
let str = "hello";

const read = function(book) {
    console.log(`Reading ${book}`);
};
console.log(typeof(read));
// function read(book) {
//     console.log(`Reading ${book}`);
// }

// function read(book) {
//     console.log(`I hate Reading ${book}`);
// }

read('Factfulness');

//Higher order function
function doSomething(arg) {
    if(typeof arg === "function") {
        arg();
    }
}
function walk() {
    console.log("Walking");
}
doSomething(walk);

let run = function() {
    console.log("Running");
};
doSomething(run);

doSomething(function() {
    console.log("Scratching my head");
});











