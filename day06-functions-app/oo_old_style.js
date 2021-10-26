// class Book {
//     constructor(title, price) {
//         this.title = title;
//         this.price = price;
//     }
//     buy(store) {
//         console.log(`Buying ${this.title} from ${store}`);
//     }
// }

//NOT USED ANYMORE
function Book(title, price) {
    this.title = title;
    this.price = price;

    this.buy = function(store) {
        console.log("Buying " + this.title + " from " + store);
    }
}

let b1 = new Book("ABC", 1200);
b1.buy('Amazon');