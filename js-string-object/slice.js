const address = "Andorkillah";
const part = address.slice(3,5);
// console.log(part);


const sentence = "I am a Good and hardworking person";
// console.log(sentence.split(" "));
// console.log(sentence.split("a"));

const friendstr = "fahim,jahim,karim,khahim,mahim,huahim";
const friends = friendstr.split(",");
console.log(friends);

const realFriend = [ 'fahim', 'jahim', 'karim', 'khahim', 'mahim', 'huahim' ];
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));