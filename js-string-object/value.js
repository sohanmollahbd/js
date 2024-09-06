const person = {
   name: 'sodor uddin', 
   age: 25,
   profession: 'developer',
   salary: 25000,
   married: true,
   'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

person.salary = 30000;
person['age'] = 30;
person['fav places'] = ['maldives', 'rajshai', 'pakistan'];
console.log(person);

const keyName = 'profession';
console.log(person[keyName]);
// cng profession name 
const propName = 'profession';
person[propName] = 'devops';
console.log(person);