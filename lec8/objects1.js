

let user ={

name : 'Aman kumar',
age : 22,
city: "delhi",
email: "abc@google.com",
isLoggedIn : false,

}

//accesing

console.log(user.name);  //Aman Kumar
console.log(user.email); //abc@google.com
console.log(user.age);   //22


//change in object 


user.email ="asss@gmail.com"
Object.freeze(user)
user.email ="csk@gmail.com"
 console.log(user);                      
   
//output

// {
//     name: 'Aman kumar',
//     age: 22,
//     city: 'delhi',
//     email: 'asss@gmail.com',
//     isLoggedIn: false
//   }


// using Symbol as key  <<<<<<<========= intrview ques

const mySym = Symbol("key1")  ////declare symbol

let person1 ={
mysymb :"mykey1"

}

 console.log(typeof person1.mysymb); //string  ayega type jab aese hoga to isla syntax sqaure bracket me hota 

 //lets see 

 const mySym1 = Symbol("key1")  ////declare symbol

 let person2 ={
 [mySym1] :"mykey1"
 
 }
 console.log(person2[mySym1]);   //mykey1 
 

//==========================OBJECTS PART 2 ==========

const tinderuser = new Object()      //<<<<<<====== SINGLTON OBJECT
// or   const tinderuser ={}        // <<<<<<====== NON SINGLTON OBJECT
console.log(tinderuser);     // {}



const userr = {}

userr.id = "1234"
userr.name = "decock"
userr.isLoggedIn = false 
console.log(userr);          //  { id: '1234', name: 'decock', isLoggedIn: false }


//======= object under obvject 


const regularuser = {

email: "abc@gmail.com",
fullname : {
           
      userfullname : {
        firstname : "Aman",
        lastname : "singh"
        }

    }

}
console.log(regularuser.fullname.userfullname.firstname);  //Aman

//=============>>>>>>>>.. combine two object  

const obj1 = {1:"aman",   2: "golu"}
const obj2 = {3:"sheetal",   4: "jenny"}
const obj3 = {5:"sheetal",   6: "jenny"}

//  const obj3 = {obj1,obj2}    this will not work will create probklem like array

 // const obj4 = Object.assign( {}, obj1, obj2, obj3)  //this can be done COMBINE BY SPREAD OPERATOR (...)

const obj4 = {...obj1,...obj2,...obj3}

console.log(obj4);         


//output

//    {
//     '1': 'aman',
//     '2': 'golu',
//     '3': 'sheetal',
//     '4': 'jenny',
//     '5': 'sheetal',
//     '6': 'jenny'
//     }


// =========OBJECT DESTRUCTURING


const course = {
  courseName : "js by jack",
   price      : "200",
   author    : "Eich"
  
  }
  
  //   course.author  
  
   const{author} = course
    console.log(author);        //  Eich
  
   // or can destructure value like this 
  
   const{author : writer} = course
   console.log(writer);         //Eich