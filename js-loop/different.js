// ood numbers 

// for (i = 0; i < 20; i++){
//    if(i % 2 === 1){
//       console.log(i)
//    }
// }

// 1 to 30 divisible by 5 

// for ( i = 1; i <= 30; i++){
//    if (i % 5 === 0){
//       console.log(i)
//    }
// }


// for ( i = 1; i <= 30; i++){
//    if(i % 3 === 0 || i % 5 === 0){
//       console.log(i)
//    }
// }
// for ( i = 1; i <= 30; i++){
//    if(i % 3 === 0 && i % 5 === 0){
//       console.log(i)
//    }
// }


// sum of 1 to 20 divisible by 3
let total = 0;
for (let i = 1 ; i <= 20; i++){
   if(i % 3 === 0){
      console.log(i)
      total = total + i;
      console.log('total-', total)
   }

}

console.log('total :', total)