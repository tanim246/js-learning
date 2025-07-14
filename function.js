// function FunctionName(){
//    statement
// }

// function BigNumberFinder(number1, number2) {
//   if(number1 > number2){
//     console.log("Big number is = ", number1)
//   }else {
//     console.log("Big number is = ", number2)
//   }
// }

// BigNumberFinder(10,15)
// BigNumberFinder(20,15)

// function findPositiveOrNaNum(num){
//     if(num>0){
//         console.log(num ,"is positive")
//     }else if(num<0){
//         console.log(num,"num is neg")
//     }else{
//         console.log(0,"num is 0")
//     }
// }

// findPositiveOrNaNum(0)

// function findOddOrEven(num){
//   if (num%2===0){
//     console.log(num ,"is even")
//   }else{
//     console.log(num ,"is odd")
//   }
// }
// findOddOrEven(10)

// function returnLearn() {
//     console.log("hello")
//     return 200
// }

// console.log(returnLearn());

function bigNumberFinderWithArray(arr) {
  let temp = arr[0];
  // 2 , 4 , 63 , 63 , 250 , 250 temp
  // 2 , 4 , 63 , 17 , 250 , 14   number
  for (let number of arr) {
    if (temp < number) {
      temp = number;
    }
  }                 
  return temp
}

let numers = [2, 4, 63, 17, 250, 1400];
console.log(bigNumberFinderWithArray(numers));
