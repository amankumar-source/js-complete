let score = "33abc";  // if value we put null output will be 0 , if undefined put output will be Nan, if put true output = 1
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);  // OUTPUT = number
console.log(valueInNumber);    //output = NaN
  

//NOTES


//"33" => 33
// "33anc" => Nan
// null => 0
//  true => 1,  false =>0 