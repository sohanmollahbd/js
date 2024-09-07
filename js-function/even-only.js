/**
 * create function that will return only the even numbers
 * 
 */

function evenNumbersOnly(numbers) {
  const evens = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      // console.log(number);
      // evens.push(number);
    }
  }
  return evens;
}

const numbers = [3, 6, 8, 10, 12, 13, 14];
// const evens = evenNumbersOnly(numbers);
// console.log("Even nums are:", evens);




// return the sum of even numbers*******************

function sumOfEvenNumbers (numbers){
   let sum = 0;
   for(const number of numbers){
      if(number % 2 === 0){
         // console.log(number);
         sum = sum + number;
      }
   }
   return sum;
}

const sum = sumOfEvenNumbers(numbers);
console.log('Sum of even numbers is:', sum);