let score = 48
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber); //here we did the conversion of string in a number.

// '33' => 33
// '33abc' => NaN
// true : 1, false : 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1: true
//0 : false
//"" : false
//'shubhangi':true

let someNumber = 50
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//*********OPERATIONS***********//
let value = 5
let negValue = -value
console.log(negValue); ///we get the negative value: -3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = 'Hello';
let str2 = ' Shubhangi';
let str3 = str1 + str2
console.log(str3); //this will give result: HELLO SHUBHANGI

console.log('1'+'2') //3
console.log('1'+ 2); //12
console.log(1 +'2'); //12
console.log('1'+ 2 + 2); //122
console.log(1 + 2 +'2'); //32

let gameCounter = 100
++gameCounter;
console.log(gameCounter);



