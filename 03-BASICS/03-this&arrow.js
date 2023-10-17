const user = {
    username:'shubhangi',
    price: 999,

    welcomeMessage: function(){   ///THIS refers to current context.
        console.log(`${this.username}, welcome to website!`)
        console.log(this);
    }
};

user.welcomeMessage()
user.username = 'sam'
user.welcomeMessage()
console.log(this);

function chai() {
    let username = 'shubhangi'
    console.log(this.username);
}
chai()

const chai = function(){
    let username = 'shubhangi'
    console.log(this.username);
};

const chai = () => { //just remove func and add arrow after parenthesis and youll get arrow function
    let username = 'shubhangi'
    console.log(this.username);
};
chai()


const addTwo = (num1 , num2) => {   
    return num1 + num2  //basic arrow function (explicit return)
}
console.log(addTwo(4,5));

const add2 = (num1 , num2) => num1 + num2  //implicit return
console.log(add2(4,5));

const add1 = (num1 , num2) => (num1 + num2)  //when curly braces,write return key word and when pareathesis, no need to write it
console.log(add1(4,5));

const addObj = (Num1, num2) => ({username:'shubhangi'})
console.log(addObj(4,5));