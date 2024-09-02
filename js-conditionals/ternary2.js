let price = 500;
const isLeader = true;

price = isLeader === true ? (price > 1000 ? price / 2 : 0) : price = price + 1000;
console.log(price);