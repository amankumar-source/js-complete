//REDUCE 

const myNums =[1,2,3]

const myTotal = myNums.reduce( function ( acc, currval){
    console.log(`acc: ${acc} and currval ${currval}`);
    return acc + currval
    
},0)   

// output     acc: 0 and currval 1
//            acc: 1 and currval 2
//            acc: 3 and currval 3

console.log(myTotal);    // 6

// by using arrow function 

const Total = myNums.reduce( (acc,curr) => acc+curr, 0)
console.log(Total);  //6


// EXAMPLE ===================


const shopCart = [

       {
       itemName : "js course",
        price : 3999
       },

        {
        itemName : "java course",
        price : 2999
       },

       {
        itemName : "cpp course",
        price : 1999
       }
]


 const priceToPAy = shopCart.reduce( (acc, item) => acc + item.price, 0)

 console.log(priceToPAy);            // 8997
   