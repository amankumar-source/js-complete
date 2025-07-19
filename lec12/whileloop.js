let i = 1;
while (i <= 3) {
  console.log(`value is ${i}`);   
  i++;
}

// value is 1
// value is 2
// value is 3


let myArray =["dhoni","rahane","jadeja"]

let arr = 0
while(arr < myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr = arr+1
}

// value is dhoni
// value is rahane
// value is jadeja




// ================= do while loop =======

// he code at least once, then checks the condition.

let a = 1;
do {
  console.log(a); // 1
  a++;
} while (a <= 3);         // 1,2,3



//EXAMPLE ==============

let score = 1
do {
    console.log(`score is ${score}`);
    score++
    
} while (score <=10);

// score is 1
// score is 2
// score is 3
// score is 4
// score is 5
// score is 6
// score is 7
// score is 8
// score is 9
// score is 10

// if we put let score =11   output will be    //  score is 11