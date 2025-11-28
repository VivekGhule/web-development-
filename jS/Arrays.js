let arrOne = [1,2,3,4,5,6,7,8,9,10]

function sumOfArr (arr){
    let sum = 0;
    for (let i  = 0; i  < arr.length; i ++) {
         sum += arr[i]
       
       
    }
    return sum;
    
}

console.log(sumOfArr(arrOne));

// Task: Create a function that receives an array of user objects
// and returns only the names of users who are age 18+

let users = [
    { name: "Amit", age: 17 },
    { name: "Sunita", age: 20 },
    { name: "Rahul", age: 18 }
  ];
  
  function getAdultNames(users) {
    return users.filter(user => user.age >= 18).map(user => user.name);
  }
  
  console.log(getAdultNames(users)); // ["Sunita", "Rahul"]
  

// arrys Meathods/

// Problem:
// Write a function that takes an array of numbers and returns a new array with only the even numbers.

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]


let numOfArr = [1, 2, 3, 4, 5, 6];

function evenNums (arr){
   return arr.filter(e => e%2 === 0 )
}

console.log(evenNums(numOfArr));


// Problem:
// Given an array of strings, return an object with the count of each string.


// Input: ["apple", "banana", "apple", "orange", "banana", "apple"]
// Output: { apple: 3, banana: 2, orange: 1 }

let friuts = ["apple", "banana", "apple", "orange", "banana", "apple"];

function counttOfLetters (arr){
    
}

