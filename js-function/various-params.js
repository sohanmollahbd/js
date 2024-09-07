function evenSizedString(str) {
  const size = str.length;
  console.log(size, str);
  if (str % 2 === 0) {
    console.log("Even size");
    return true;
  } else {
    console.log("Odd size");
    return false;
  }
}

// evenSizedString('Dhaka');
// evenSizedString('faka');

function doubleOrTriple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

function numOfElements(numbers) {
  const len = numbers.length;
  return len;
}

numOfElements([12, 12, 24, 45,122222233, 34]);