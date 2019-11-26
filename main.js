const util = require("./myUtils.js");
const reader = require('readline-sync');
const num1 = reader.questionInt("Please insert a positive number = ");
const num2 = reader.questionInt("Please insert another positive number = ");
let arrPrime = [];
let a = num1;
let b = num2;
if(num1>num2) {
    let x = a;
    a = b;
    b = x;
    }
for(let x = a; x<=b; x++) {
    if(util.isPrime(x))
        arrPrime.push(x);
    }
util.arrPrint(arrPrime);
