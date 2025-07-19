const userEmail = "aman@gmail.com"
 if(userEmail){
    console.log("got user email");
 }
 else{
    console.log("dont have user email");
 }                                                         // got user email


 // if inplace of empty string put empty array [] then it eill be true and print got user email this is all thruthy falsy concept


// =======================FALSY VALUE ==============
 
// 0,-0,BigInt,0n,"",null,undefined,NaN

// =======================TRUTHY VALUE===========================

// "0",'false'," ", [], {}, function(){}


const userEmails = []
  if(userEmails.length ==0){

    console.log("array is empty");
    
  }                                             // array is empty


const emptyObj ={}
if(Object.keys(emptyObj).length  == 0){
    console.log("object is empty");
    
}                                                             /// object is empty







/// ========== NULLISH COALESCING OPERATOR (??): null undefined=======


let val1;
val1 = 5 ?? 10   
console.log(val1);       //5

val1 = null ?? 10        //10
val1 = undefined ?? 15   //15
val1 = null ?? 10 ?? 20   //10

console.log(val1);  



//TERNARY OPERATOR =====================


//condition ? true : false

 const iceTeaPrice =100
 iceTeaPrice <= 80 ? console.log("LESS THAN 80"): console.log("MORE THAN 80")
 ;
     // MORE THAN 80 