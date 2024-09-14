/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */

/**
 * 1. put odd numbers in an array
 */

/**
 * for of er kaj array theke number guloke ek ek kore ber kora like-
42
13
58
65
81
 */

function oodAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    // console.log(number);
    if (number % 2 === 1) {
      // console.log(number);
      odds.push(number);
    }
  }
  // odds is the array that contains only the odd numbers
  //   console.log(odds);
  let sum = 0;
  for (const number of odds) {
    // console.log(number);
    sum = sum + number;
  }
  const count = odds.length;
  console.log(sum, count);
  const average = sum / count;
  return average;
}

const numbers = [42, 13, 58, 65, 81, 7, 105];
const average = oodAverage(numbers);
console.log("Average of odd number is:", average);
