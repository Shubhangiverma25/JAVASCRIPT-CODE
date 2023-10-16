//ARRAYS

const myarr = [0,1,2,3,4,5];
console.log(myarr[3]);

//array methods>>>

myarr.push(6); //this will add
myarr.pop();  //this will simply remove the last number
myarr.unshift(7); //this will add number at starting of the array, which somehow will change allthe indexes of the array and thats why it is very much critisized.
myarr.shift();  //this will remove the number from the starting 
console.log(myarr);
console.log(myarr.includes(9));  //this will show result in boolean.

const newArr = myarr.join();
console.log(myarr);  //this will give result in array
console.log(newArr); 
console.log(typeof newArr); //this will give result in strings. this is what join method do.

console.log('A', myarr);
const my1 = myarr.slice(1,3);

console.log(my1);
console.log('B', myarr);

const my2 = myarr.splice(1,3);
console.log(my2);

//const marvel = ['ironman', 'captain america', 'dr.strange'];
//const dc = ['batman', 'wonderwoman','superman']
const allheroes = marvel.concat(dc);
console.log(allheroes);  //if you do push method, it will give you nested array but if you do concat method, it will give you whole array without modifying existing arrays.
 
const marvel = ['ironman', 'captain america', 'dr.strange'];
const dc = ['batman', 'wonderwoman','superman']
const allNewHeroes = [...marvel,...dc]; //this is spread operator.
console.log(allNewHeroes); //works same like concat but more easy if you have more than 2- 3 arrays.

const rayray = [1,2,3,[4,5,6], 7, [6,7, [4,5]]];
const diffarr = rayray.flat(Infinity);
console.log(diffarr); //rarely used method(FLAT), to make nested array into flat or single one.

console.log(Array.isArray('shubhangi')); //this how we check whether it array or not
console.log(Array.from('shubhangi'));  //this is how we can convert into an array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

