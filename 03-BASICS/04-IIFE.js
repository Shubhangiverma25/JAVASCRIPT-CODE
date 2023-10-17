//Immediately Invoked Functions Expressions (IIFE)

function user(){
    console.log('DB CONNECTED')
}
user();


(function user(){
    console.log('DB CONNECTED')
})(); ///global scope ke pollution ko variables or object se hatane ke lie hamne IIFE ka use kia by using parenthesis after the function in order to call the function. iife is used for directly invoking.

(() => {
    console.log('DB CONNECTED 1') 
})()  //this is how we can write arrow function but always use colon (;) at the end of the above code otherwise it wont execute.

((name) => {
    console.log(`DB CONNECTED 1 ${name}`) 
})('shubhangi verma')