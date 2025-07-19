const fruits = ["apple","mango","banana"]
const animals =["lion",'tiger','monkey']

  //  fruits.push(animals)
//  console.log(fruits);   //  [ 'apple', 'mango', 'banana', [ 'lion', 'tiger', 'monkey' ] ]


//but

const all = fruits.concat(animals)
console.log(all);    //   [ 'apple', 'mango', 'banana', 'lion', 'tiger', 'monkey' ]


//==================    SPREAD OPERATOR   ===============

//Using spread (...) to copy an array

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);        // Output: [1, 2, 3, 4, 5]


///========================


let array1 = [1, 2, 3, [ 4 ,5 ], [ 6, 7, 8], 9]
let array2 = array1.flat(Infinity)     //.flat array under aaray ko ek array me karta hai 
console.log(array2);  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    

console.log(Array.isArray("Aman"));   // false
console.log(Array.from("Aman"));      // [ 'A', 'm', 'a', 'n' ]

console.log(Array.from({ name: "Aman" }))   // []        this is interesting it provide emty array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));   //[ 100, 200, 300 ]






//Destructuring Arrays

let [first, second, third] = ["Red", "Green", "Blue"];
console.log(first); // Output: Red
console.log(second); // Output: Green
console.log(third); // Output: Blue
