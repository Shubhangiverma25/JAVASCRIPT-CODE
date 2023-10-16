const score = 500
console.log(score);

const otherNumber = 23.9074
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

//>>>>>>>>>>>>>>maths<<<<<<<<<<<<<<<//
console.log(Math);    //it is an object
console.log(Math.abs(-6))  //abs is absolute, it gives positive
console.log(Math.round(3.7));
console.log(Math.ceil(4.3)); //no matter what ceil will always take bigger number. in this case we will get 5 as an output.
console.log(Math.floor(4.7));  //no matter what floor will take the lowest number. in this case we will get 4.
// use cousiously but moreover we are going to use round more often thn this.
console.log(Math.min(2,3,4,5));
console.log(Math.max(2,3,4,5));
console.log(Math.random());  //will always give value between 0 and 1
console.log((Math.random()*10)+1);  //to avoid zero we add 1

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min + 1))+ min);