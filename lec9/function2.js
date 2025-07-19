// function  used in shopping cart   (when user pass many numbers

 
 function calculateCartPrice(...num1){

    return num1

 }
 console.log(calculateCartPrice(200,300,400,500));   // 200 (but it will retun only single number like2 if pass more will not come) but when use rest operator{...} will print all nums in array         output => [ 200, 300, 400, 500 ]
 
// function calculateCartPrice(val1,val2,...num1) output will be  [400,500]  


// FUCNTION WITH OBJECTS  <<<<<<<<<<<<=====================================


const user = {

username: "Aman",
price: 199

}
 function handleObject(any){

    console.log(`username is ${any.username} and price is ${any.price}`);
    
 }
 // handleObject(user);  // username is Aman and price is 199
 //or
handleObject({
    username : "Aman",
    price : 199
})                              // username is Aman and price is 199

  
// FUCNTIONS WITH Array <<<<<<<<<<<<=====================================

const myArray = [200,400,500,700]

function secondvalue(getArray){
      return getArray[2]
  
}
console.log(secondvalue(myArray));     // 500





