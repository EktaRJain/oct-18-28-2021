var i = 10;
let j = 20; //Introduced in ES6
const k = 30; //Introduced in ES6

//var is function scoped
//let is block scoped
//const is also block scoped and readonly
function check(num) {
    if(num % 2 == 0) {
        var message = "Even";
        let msg = "number is even";
        const msg2 = "EVEN";
    }
    console.log(message);
    //console.log(msg);
    //console.log(msg2);
}
check(20);