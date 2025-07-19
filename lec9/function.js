function greet(){
console.log("hello Man");

}
//call
// greet();    //hello Man

function myname() {
console.log("A");
console.log("M");
console.log("A");
console.log("N");
}

myname();    //how fucntion works
//==================================================== 

//add two numbers by function by paramater

function addtwonum(num1,num2){
    console.log(num1+num2);
    
}
addtwonum(3,6);  //9
addtwonum(3,"a");  //3a
addtwonum(3,null);  //3

// using return statement addition =>  a fnc can return a value using return keywrd

function add(number1, number2) {

    
     return number1 + number2;
   // console.log("hellojii"); return statement ke bad kuch bhi print nhi hota hai 
  }
  let result = add(8, 3); 
  console.log(result);  //  8
  
// ====== CODES =======




function loginUserName(username){
if(!username){
    console.log("please enetr username");
    return
    
}
return `${username} just logged in`      
}

console.log(loginUserName("aman"));  // aman just logged in


