const mobile = {
   brand : 'Samsung',
   price: 25000,
   camera: '12mp',
   color: 'black',
   isNew : true
}

// for of calia array er moddhe
//  for in calai Object er moddhe
for (const prop in mobile){
   // console.log(prop);
   // console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);

for ( const key of keys){
   console.log(key, ':', mobile[key])
}

// for of : array
// for in : object
for(const prop in mobile){
   // console.log(prop)
   // console.log(mobile[prop])
}

// const keys = Object.keys(mobile);
// console.log(keys);

for(const key of keys){
   console.log(key, ':', mobile[key]);
   
}