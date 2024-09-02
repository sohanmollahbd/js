/**
 * Ternary 3 parts
 * 
 *    ?  :  
 * 
 * condition ? do someting when true : do someting when false
 */









// const age = 20;

// if (age >= 18) {
//    console.log("you can vote")
// }
// else {
//    console.log("jao baccha ghumai thako")
// }


//simple ternary-
// age >= 18 ? console.log("Vote dio") : console.log("Gumai thako")



let price = 500;
const isLeader = true;

// if (isLeader === true) {
//    price = 0;
// }
// else {
//    price = price + 100;
// }
// // console.log(price);

// price = isLeader === false ? 0 : price = price + 200;


if(isLeader === true) {
   if(price > 1000) {
      price = price / 2;
   }
   else {
      price = 0;
   }
}
else {
   price = price + 1000;
}

// if(price > 1000) {
//    price = price / 2;
// }
// else {
//    price = 0;
// }


// ternary 
// price = isLeader === true ? price > 1000 ? price / 2 : 0 : price = price + 1000;


price = isLeader === true ?
      price > 1000 ?
       price / 2 
      : 0 
: price = price + 1000;

console.log(price);