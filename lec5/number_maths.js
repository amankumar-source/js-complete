let num1 = 10;       // Integer
let num2 = 10.5;     // Floating point number
let num3 = 1e5;      // Exponential notation (100000)
console.log(typeof num1); // Output: "number"


//toFixed(n) – Rounds to n decimal places 

let num = 5.6789;
console.log(num.toFixed(2)); // Output: "5.68"

//toPrecision(n) – Formats number with n significant digits

let numberr = 123.456;
console.log(numberr.toPrecision(4)); // Output: "123.5"

//toString(base) – Converts number to string (supports different bases)

let num5 = 255;
console.log(num5.toString(16)); // Output: "ff" (Hexadecimal)
console.log(num5.toString(2));  // Output: "11111111" (Binary)


// ------------->>>>>>>      CODES BY chai

const score = 400
console.log(score);

const balance = new Number(100) 


console.log(balance);  // [Number: 100]

console.log(balance.toString().length); //3 

console.log(balance.toFixed(2));  //100.00
console.log(balance.toFixed(1));  //100.0

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));  //  124
//but
const otherNumber1 = 1123.8966
console.log(otherNumber1.toPrecision(3)); //  1.12e+3


const hundreds = 1000000
console.log(hundreds.toLocaleString());  //10,00,000
console.log(hundreds.toLocaleString('en-IN'));  //indian values 10,00,000


//++++++++++++++++++++++++++++++++  MATHS IN JS  +++++++++++++++++++++++

console.log(Math);       //Object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); //  5
console.log(Math.floor(4.9)); // 4


//Power & Root

console.log(Math.pow(2, 3));  // 2^3 = 8
console.log(Math.sqrt(25));   // Square root = 5
console.log(Math.cbrt(27));   // Cube root = 3

//Random Number

console.log(Math.random());          // Random number between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); // Random number between 1 and 10


//max min

console.log(Math.max(10, 20, 5));  // 20
console.log(Math.min(10, 20, 5));  // 5

//trigo function 

console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0));           // 1
console.log(Math.tan(Math.PI / 4)); // 1


//Handling NaN (Not a Number) 

console.log(isNaN(100));       // false
console.log(isNaN("Hello"));   // true
console.log(Number.isNaN(NaN)); // true


//+++++  Converting Strings to Numbers ++++++

 //parseInt() – Converts a string to an integer

console.log(parseInt("100"));    // 100
console.log(parseInt("100px"));  // 100 (ignores "px")

// parseFloat() – Converts a string to a float

console.log(parseFloat("3.14")); // 3.14


 //Number() – Converts a string to a number

console.log(Number("100.50"));   // 100.5
console.log(Number("Hello"));    // NaN



//    Infinity and -Infinity

console.log(1 / 0);  // Infinity
console.log(-1 / 0); // -Infinity
console.log(Number.MAX_VALUE);  // Largest number in JS
console.log(Number.MIN_VALUE);  // Smallest number in JS





//++++++++++++ CODES BY CHAI ++++++++++++++

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) +min);   //revise again
