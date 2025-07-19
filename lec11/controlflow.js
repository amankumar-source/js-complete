// if statement 
 
let age = 23;
if(age >18){
    console.log("you can vote ");     // you can vote 
}

//if else

let Age = 13;
if(Age >18){
    console.log("you can vote ");     
}
else{
    console.log("you cannot vote");    // you cannot vote
}


// else if statement   used to test several variants of condition  

 let num1 =10
 let num2 =10

 if (num1>num2){
    console.log(num1+" greater than "+num2); 
 }
 else if(num1 == num2){
    console.log(num1 +"is equaal"+ num2);
 }
 else{
    console.log(num1+"less than"+ num2);
 }


//=====================================



if (true){
console.log("hello")          // execute
}

if(false){
    console.log("hello")     // not execute

}

// operators comparison 

// <, >, <=, >=, ==, !=, ===, !== 


const score = 200

if (score > 100){
    const power = "fly"      
    console.log(`user power; ${power}`);       // user power; fly
}

 // console.log(`user power; ${power}`);    // this line not execute but at line number 56 if we put var power = "fly"  this will execute also bcoz var is global scope 

// else if real example 


const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard && 2==3){
console.log("allow to buy cources");

}

const userfromgoogle = true
const userfromemail = false

if (userfromemail || userfromgoogle ) {
    console.log("LOGGED IN ");
}


// ========================= SWITCH STATEMENT =============

let day = 5; // You can change this value (1 to 7)

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day (choose 1-7)");
}



