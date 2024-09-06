const college ={
   Name : 'vnc',
   class : ['11', '12'],
   events : ['bijoy dibos', 'science fair', 'unga-bunga'],
   unique : {
      color: 'blue',
      result: {
         gpa : 5,
         merit: 'top'
      }
   }
 }
// console.log(college.Name);
// console.log(college.unique.color);
college.unique.result.merit = ['top top most'];
console.log(college.unique.result.merit);
college.events[1] = '16 dec'
console.log(college.events[1]);

// delete object
delete college.class;
console.log(college);