//      IIFE (Immediately Invoked function Expression)

//  ====>   It’s a function that runs immediately after it is defined.

(function chai(){
console.log(`hello brother`);
})();      // hello brother

// here two braces use () ()   first one is fnc   definition second one is functiuon call execute
  
//=============================== BY USING ARROW FUNCTION  =======================

( () =>  {
   console.log(`HELLO BROTHER to`);
})()        

// HELLO BROTHER to        but that semi colon; is imp at first iife code  to run next iife for two iife code use semcolon ;

 //        Example with Variable Encapsulation:

 (function () {
    let counter = 0;
    console.log("Counter is:", counter); // 0
  })();
  
  console.log(typeof counter); // undefined (because it's private)
  


// Named IIFE 

(function greet() {
    console.log("Hello from IIFE!");
  })();
  



