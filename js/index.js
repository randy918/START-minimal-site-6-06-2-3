'use strict'

//^ ████████████████████████████████████  GLOBAL SCOPE

//^ ████████████████████████████████████  GLOBAL SCOPE VARIABLES

const orders = [
    { amount: 250 },
    { amount: 450 },
    { amount: 150 },
    { amount: 350 },
]


//_ ████████████████████████████████████  VARIABLE EXPRESSIONS

const totalAmount = orders.reduce(function (sum, order) {
c("hello", sum, order);
    return sum + order.amount

}, 0)


//>  ████████████████████████████████████  PROGRAM


const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalAmount); // Output: 15