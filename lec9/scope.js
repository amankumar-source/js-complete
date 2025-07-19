//scope defines where variables can be accessed in your code.

//  1)global 
//  2)local
//  2)block 


var c = 300; // suppose if  i declare var on top but inside block again  i declare var then even after output will print var c value which is 30 in below  {redeclare}
// this is the prolem with var 


let a = 500;
if (true) {
    let a = 10
    const b = 20 
    var c = 30
    
}

//console.log(a);    // produce error coz let/const is block scope
//console.log(b);    // produce error coz let/const is block scope
 
console.log(c);    // 30    this will print thats why we do not use var 
console.log(a);   // 500  coz in let cant be redeclare 

//===============================================================================





function one(){
  const username = 'Aman'
  function two(){
    const website = "portfolio"
    console.log(username);
    
  }
 // console.log(website);   produce error
  
  two()
}

one()            // Aman

// same work in if else 

if (true) {

    const name = "Aman"
      if(name === "Aman"){
          const website = "youtube"
          console.log(name + website);        //Amanyoutube

      
   }
}

//++======================== interseting=====

console.log(addOne(5))        // 6

function addOne(num){
return num + 1

}


// next 
console.log(addTwo(5));  // error   (Cannot access 'addTwo' before initialization)

const addTwo = function(num){
  return num +2
}
