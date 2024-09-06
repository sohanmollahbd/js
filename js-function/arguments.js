function doubleIt(Number){
   const double = Number * 2;
   console.log(Number, double);
}
console.log('I will call the function');
doubleIt(15);
console.log('--------');
doubleIt(88);
console.log('--------');
doubleIt(873);

const Number = 55;;
doubleIt(Number);

const money = 120;
doubleIt(money);

// difference
function difference (num1, num2){
   const diff = num1 - num2;
   console.log(num1, num2, 'difference is', diff);
}

const myFatherAge = 55;
const myAge = 24;
difference(myFatherAge,myAge);