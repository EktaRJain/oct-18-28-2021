let langs = ["Java", "Ruby", "Go", "JavaScript", "Python"];
// for (let i = 0; i < langs.length; i++) {
//     let lang = langs[i];
//     console.log(lang); 
// }
langs.forEach(it => console.log(it));
langs.forEach(function(it){ 
    console.log(it);
});

let newColl = langs.map(it => it.toUpperCase());
console.log(newColl);

let langsStartingWithJ = langs.filter(it => it.startsWith("J"));
console.log(langsStartingWithJ);