//ARRAY IN JS

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);  // Output: ["Apple", "Banana", "Mango"]


let colors = new Array("Red", "Green", "Blue");
console.log(colors); // Output: ["Red", "Green", "Blue"]


let cars = ["BMW", "Audi", "Tesla"];
console.log(cars[0]); // Output: BMW
console.log(cars[1]); // Output: Audi
console.log(cars[2]); // Output: Tesla



let cities = ["Delhi", "Mumbai", "Kolkata"];
cities[1] = "Bangalore";  
console.log(cities); // Output: ["Delhi", "Bangalore", "Kolkata"]



let numbers = [10, 20, 30, 40, 50];
console.log(numbers.length); // Output: 5



let animals = ["Dog", "Cat"];
animals.push("Elephant");  
console.log(animals); // Output: ["Dog", "Cat", "Elephant"]

animals.pop();
console.log(animals); // Output: ["Dog", "Cat"]

animals.unshift("Lion");  
console.log(animals); // Output: ["Lion", "Dog", "Cat"]

animals.shift();  
console.log(animals); // Output: ["Dog", "Cat"]


//     Splicing & Slicing
//  splice(start, deleteCount, item1, item2, ...)
//  Used to add/remove elements at a specific index.

let months = ["Jan", "March", "April"];
months.splice(1, 0, "Feb");  
console.log(months); // Output: ["Jan", "Feb", "March", "April"]

months.splice(2, 1);  
console.log(months); // Output: ["Jan", "Feb", "April"]



// Searching in an Array
//indexOf() - Finds index of an element

let food = ["Pizza", "Burger", "Pasta"];
console.log(food.indexOf("Burger")); // Output: 1
console.log(food.indexOf("Noodles")); // Output: -1 (not found)

//inclueds()
console.log(food.includes("Pizza")); // Output: true
console.log(food.includes("Noodles")); // Output: false


//Iterating Over Arrays

const  myarr3 =  [1,2,3,4,5]

const newarrr =  myarr3.join()
console.log(myarr3);   //     [ 1, 2, 3, 4, 5 ]
console.log(newarrr);  //     1,2,3,4,5

console.log( typeof newarrr)  //string       (join ne array ko bind bhi kia aur string me convert bhi )





























































const myArr = [0,1,2,3,4,5,]      // zero base indexing
console.log(myArr[1]); //1
const heros =["shaktiman","naagraj"]

const myarr = new Array(1,2,3,4)
console.log(myarr[1]);


