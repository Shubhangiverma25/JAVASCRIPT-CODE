console.log(2>1);
console.log( 2>= 1);
console.log(2==2);
console.log(2 != 1);

console.log('2'> 1);
console.log('02'> 1); //here we are trying to compare two diff types of datatypes which is not good practice and not good for readability. also typescript doesnt even allow you to compare two diff datatypes.

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
 
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//always avoid these types of conversions which we did above bcz they always confuse us. always do CLEAN CODE.
// == : this is equity check
// === : this is strict check