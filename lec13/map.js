// map() 

// Use: Transforms each item in the array.
// Returns: A new array with the transformed items.


const nums = [1, 2, 3];
const squares = nums.map(n => n * n);
console.log(squares); //                      [1, 4, 9]


 // or if scope open {}  must put return 

  //CHAINING IN map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10]

const newNums = myNumbers
          .map((num) => num * 10)
          .map((num) => num + 1)
          .filter((num) => num >= 40)
 console.log(newNums);                   
          

 //output 
//  [
//     41, 51,  61, 71,
//     81, 91, 101
//   ]
  