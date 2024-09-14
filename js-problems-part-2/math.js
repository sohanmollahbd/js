// const Math = {
//     min: function min(num1, num2){
//         return num2;
//     }
// }

// console.log(Math.max);



// sob ceye lawes number:
const min = Math.min(23,2,3,4,56,665,67,89,75,44,4);
console.log(min);

const maxNum = Math.max(23,4,4,4,3,3,5454,556,5);
console.log(maxNum);

console.log(Math.PI);
console.log(Math.abs(3-5)); //Math.abs : num er difference ber korar jonno


console.log(Math.round(2.25));//Math.abs() : num er purno songkha ber kore dei kacha-kachi man
console.log(Math.round(2.85));//Math.abs() : num er purno songkha ber kore dei kacha-kachi man.

console.log(Math.floor(5.95));
//Math.floor() : num er purno songkha ber kore dei durer man. 5.95 thakleo 5 dibe


// floor opposite ceil : mane eta durrer besi man dibe..5.35 thakleo 6 dhorai dibe. 
console.log(Math.ceil(5.35));
console.log(Math.ceil(5.000001)); //6 banai 


console.log(Math.random()); //random() random num dei fraction
console.log(Math.random()*10); //random()* 10 gun dilam



// purno songkha ber korte round() use korte hoi 
const rand = Math.round(Math.random()*10);
console.log(rand);