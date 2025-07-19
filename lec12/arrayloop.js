// for of loop   (for ARRAY,string)

// [ "", "", "" ]
// [ {}, {}, {} ]

const arr=[1,2,3,4,5]
for (const num of arr) 
    console.log(num);
    {                             
}

1
2
3
4
5

// for.. in ( for object, array)

let person = { name: "Aman", age: 21 };

for (let key in person) {
  console.log(key, person[key]);
}
// Output: name Aman
//         age 21

// MAP IN JS 


const map = new Map()
map.set('IN' , "India")
map.set('USA', "United States Of America")
map.set('FR' , "France")

//console.log(map);


// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States Of America',
//     'FR' => 'France'
//   }
 for (const [key,value] of map) {
     console.log(key, ':-',value);
  }

//  IN :- India
//  USA :- United States Of America
//  FR :- France


// ====for in loop====  (for objects) example 

 const myObject ={
   js: "javascript",
   cpp: "c++",
   rb: "ruby",
   swift: "swift by apple"
 }
for(const key in myObject){
    console.log(myObject[key]);  // this will print all keys
}

// for in loop exaple in ARRAY


const programming =["js","java","cpp","python"]
 for(const key in programming){
    console.log(key);      // keys print  like 0,1,2,3
    
 }


 // cannot use for in loop in map we will know futher next 
 
// ============for each loop ==========

const coding =["js","java","cpp","python"]
coding.forEach( function (item){
console.log(item);
} )

// js
// java
// cpp
// python

 // also use arrow fucntion

 coding.forEach((item) =>{ 

    console.log(item)                   // same output
 })



 // [ {}, {}, {} ]  objects under array 

 const mycoding =[
    {
      languagename : "javascript",
      languageFileName : ".js"
     },

     {
     languagename : "java",
     languageFileName : "javas"

    },
    {
    languagename : "cpp",
    languageFileName : "cp"
   }

 ]

 mycoding.forEach((item) => {

    console.log(item.languagename);
    
 })

 // javascript
//  java
//  cpp