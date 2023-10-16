//singleton --> is formed only from constructor
Object.create

//object literals 
const mySymbol = Symbol('key1');


const user = {
    name:'shubhangi',
    'full name' : 'shubhangi verma',
    [mySymbol]: 'myKey1',  //when you want to represent symbol, you use square brackets.
    age: 25,
    city: 'Delhi',
    email: 'shubhangi@gmail.com',
    isLoggedIn: false,
    LastLoginDays: ['Monday','Friday']
};

console.log(user.email);
console.log(user['email']);
console.log(user['full name']);
console.log(user[mySymbol]);

user.email = 'shubhangi@google.com'
//Object.freeze(user);  //here we froze the email by using object, so when try to change it again, it will be same as above one. check CONSOLE.
user.email ='shubhangi@microsoft.com'
console.log(user);

const user = {
    name:'shubhangi',
    'full name' : 'shubhangi verma',
    [mySymbol]: 'myKey1',  //when you want to represent symbol, you use square brackets.
    age: 25,
    city: 'Delhi',
    email: 'shubhangi@gmail.com',
    isLoggedIn: false,
    LastLoginDays: ['Monday','Friday']
};
user.greeting = function(){
    console.log('Hello, User!')
};
user.greeting2 = function(){
    console.log(`Hello User!,${this.name}`);
};
console.log(user.greeting());
console.log(user.greeting2());


///////////////now we will see objeects- singleton>>>>>>>>>>>>>>>>>
const tinderUser = new Object();
tinderUser.id = '123xy'
tinderUser.name ='Sammy'
tinderUser.isloggedIn = false

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        userfullname :{
            firstname:'shubhangi',
            lastname:'verma'
        }
    }
};
console.log(regularUser.fullname.userfullname.firstname);

const object1 = {1:'a', 2:'b'}
const object2 = {3:'c', 4:'d'}
//const object3 = {object1, object2};
//const object3 = Object.assign({},object1,object2)
//in above code, curly braces are acting as a target and objects as source, these braces guarantee the results. this is assign method. thou we are going to use it less only. again we will be using SPREAD OPERATOR.
const object3 = {...object1, ...object2}; //--->> SPREAD OPERATOR
console.log(object3); 

const users = [{
    id: 1,
    email:'sv123@gmail.com'
},
{    id: 1,
    email:'sv321123@gmail.com'
}
]
console.log(users[1].email);


////////////Object De-structuring and JSON API//////////////
const course ={
    courseName: 'JavaScript',
    price: '899',
    courseIns: 'ChaiAurCode'
};

//course.courseInstructor
const {courseInstructor: courseIns} = course
console.log(courseIns);

///JSON
{
    //name: 'shubhangi',
    //age:25,
    //profession: 'developer',
    //company:'Capegemini'
}