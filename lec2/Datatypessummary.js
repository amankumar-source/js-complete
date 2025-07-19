//PRIMITIVE  TYPES   (stack memeory used)
 const score = 100
const scoreValue =100.3
 
const isLoggedIn = false
const outsideTemp =null
let userEmail;

const id = Symbol("123")       //S IS CAPITAL 
const anotherId = Symbol("123")

console.log(id === anotherId);  // false  , val of both id seems same but actually it is not

//bigInt

const bigNumber = 3243278564;



//NON PRIMITIVE OR REFERENCE DATA TYPES  (heap memory used )


const heros =["aman","kunal", "doga"];
let myObj = {
    name: "aman",
    age: 21,
}

 const myFunction = function(){ 

    console.log("hello wolrd");

 }
 console.log(typeof myFunction);  // function   or itis called fucntion object 
 console.log(typeof heros);    //object




 