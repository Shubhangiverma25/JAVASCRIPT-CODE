function sayMyName() {
    console.log('S')
    console.log('H')
    console.log('U')
    console.log('B')
    console.log('H')
    console.log('A')
    console.log('N')
    console.log('G')
    console.log('I')
};
sayMyName()

//function add2nos(number1, number2) {
    //console.log(number1 + number2)
//};

function add2nos(number1, number2) {
   let result= number1 + number2
   return result
   //return number1 + number2
};

const result = add2nos(4,5)
console.log(result)

function loginUserMessage(username = 'sam'){
    if(username === undefined){   //OR if(!username) : both are same
        console.log('Please enter a username.');
        return
    }
    return `${username} just logged in.`
}
console.log(loginUserMessage());

console.log(loginUserMessage('shubhangi'));

//////functions with objects and array///////
function calculatePrice(...num1){  //here we used dot as rest operator. both are named on there used case.
    return num1
}
console.log(calculatePrice(200,400,600));

const user = {
    name: 'shubhangi',
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`)
}

//handleObject(user);
handleObject({
    name:'sam',
    price: 499
});

const myNewArray = [200,400,600,800,1000]

function returnSecondValue(getarray){
    return getarray[1]
}
//console.log(returnSecondValue([200,400,600,800,1000]))
console.log(returnSecondValue(myNewArray));
