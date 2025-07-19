// MAP   FILTER   REDUCE 


// const coding =["js","java","cpp","python"]
//   const values = coding.forEach ((item) => {
//     console.log(item);
    
// })
// console.log(values);


// output

  // js
// java
// cpp
// python
// undefined        values print but here is undefined 

const mynums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const newnums = mynums.filter((num) => num > 4 )
console.log(newnums);                          // [ 5, 6, 7, 8, 9, 10 ]
 

//const newnums = mynums.filter((num) => {
// return num > 4    
// }  )                                  agr funjction me curly braces usekis to return likhna padta as we learn earlier

// eXmple


const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", publishDate: 1960, genre: "Fiction" },
    { title: "1984", author: "George Orwell", publishDate: 1949, genre: "Dystopian" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishDate: 1925, genre: "Classic" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", publishDate: 1951, genre: "Fiction" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", publishDate: 1937, genre: "Fantasy" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", publishDate: 1997, genre: "Fantasy" },
    { title: "Pride and Prejudice", author: "Jane Austen", publishDate: 1813, genre: "Romance" },
    { title: "The Da Vinci Code", author: "Dan Brown", publishDate: 2003, genre: "Thriller" },
    { title: "The Alchemist", author: "Paulo Coelho", publishDate: 1988, genre: "Adventure" },
    { title: "The Road", author: "Cormac McCarthy", publishDate: 2006, genre: "Post-apocalyptic" }
  ];
  

let userbooks = books.filter((bk) => bk.genre === "Adventure")
console.log(userbooks);

//output

// [
//     {
//       title: 'The Alchemist',
//       author: 'Paulo Coelho',
//       publishDate: 1988,
//       genre: 'Adventure'
//     }
//   ]


userbooks = books.filter( (bk) => {  return bk.publishDate >= 1950}) 
console.log(userbooks);                                       /// output will be accoridn to data 
 
userbooks = books.filter( (bk) => { 
     return bk.publishDate >= 1950 &&  bk.genre === "thriller"})    // two codition
