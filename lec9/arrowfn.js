   //                           this keyword 


const user = {
    name: "Aman",
    price: 888,
    greet: function () {
      console.log("Hello, " + this.name); // "Hello, Aman"
     
    },
  };
  
// user.greet();
// user.name = 'ALTMAN'  
// user.greet();           // Hello, ALTMAN    NAME CHNAGED IN OBJECT 

console.log(this);      // {}     empty object 


function chai (){
   let username = "Aman"
    console.log(this);      
    
}
//chai();     // error aayega 






// const chai = ()=> {
//     let username = "Aman"
//   console.log(this);      
// }
//chai()         // {}      in arrow function nhi aayega error



// ================ARROW FUNCTION ======================= (basics)



const addTwo = (num1,num2) => {
return num1 + num2 

}
console.log(addTwo(4,6));
