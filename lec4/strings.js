let str1 = "Aman";
let str2 = 'hello';
let str3 = `hi aaman`;  //  (``) this is ES6 features called template literals
console.log(str3);

// length of string

let str4 = "ENGINEERING";
console.log(str4.length);   //11


// Template literals (Backticks ``)

 let name = "aman";
 let name2 = `hello ${name}`;
 console.log(name2);  // heloo aman



 // Converting Other Types to Strings

 let num = 123;
console.log(String(num)); // "123"
console.log(num.toString()); // "123"

 //concatenation in strings

 const namee = 'Aman';
 const count = 50;
  console.log(namee + count + "value"); // Aman50value
  
// incase of using + 9 (plus)  to concate you can use backtick `` as done in line 12

//dcalre stromg as object 

const gameName = new String('Aman');
console.log( gameName[0]); //A
console.log(gameName.__proto__);  // {}  object 
console.log(gameName.substring(0,2));  //Am

// slice method

console.log(gameName.slice(1,3)); //ma
console.log(gameName.slice(-3,4)); //man

//trim, replace method 
const newString1 = "  Aman     ";
console.log(newString1.trim());    //Aman  trim the spaces

console.log(gameName.replace('an','abc'));   //Amabc

//split method 
let string2 = 'Aman-Kumar-Singh-Abc';
console.log(string2.split('-'));  // [ 'Aman', 'Kumar', 'Singh', 'Abc' ]













