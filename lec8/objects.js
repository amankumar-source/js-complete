

//OBJECTS =========>>>

let person = {
    name: "Aman",
    age: 22,
    city: "Delhi"
  };

//Accessing Properties
console.log(person.name);  // Output: Aman
console.log(person["age"]); // Output: 22

//Modifying Properties

person.age = 23;
person.country = "India"; // Adds a new property
console.log(person);

//delet property

delete person.city;

//Methods in Objects

let car = {
    brand: "Tesla",
    start: function() {
      console.log("Car started");
    }
  };
  car.start(); // Output: Car started
  

//loop through object  

for (let key in person) {
    console.log(key, person[key]);
  }
  


  //object methods 

console.log(Object.keys(person));  // Get all keys
console.log(Object.values(person)); // Get all values
console.log(Object.entries(person)); // Get key-value pairs


console.log(person.hasOwnProperty('age'));    //true
console.log(person.hasOwnProperty('date'));   //false 

 

//object destructuring


let { name, age } = person;
console.log(name, age); // Output: Aman 23


///Spread Operator (...)



let newPerson = { ...person, hobby: "Coding" };
console.log(newPerson);



//this keyword in object 


let user = {
    name: "Aman",
    greet() {
      console.log(`Hello, ${this.name}`);
    }
  };
  user.greet(); // Output: Hello, Aman
  






//================ CODES =======================
 //next file me hai 














