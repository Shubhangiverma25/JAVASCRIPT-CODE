//for of

['','','',]
[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
};

const greetings = 'Hello World'
for (const greet of greetings) {
    console.log(`each char is ${greet}`)
};

//MAPS>>>>>>>>>

//>>>>>>>for of loop:

//const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
console.log(map);


const maps = new Map()
maps.set('IN', 'India')
maps.set('USA', 'United States of America')
maps.set('FR', 'France')
maps.set('IN', 'India')
console.log(maps); ///it will not print the duplicate one. map is known for its uniqueness and odrer.

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
for (const[key, value] of map) {  //here [] will destructure the array and you can hold key and value seperately.
    console.log(key, '-->', value)
};

///////////////++++++OBJECTS++++++////////////////

//>>>>>>>>>>for in loop:

const myObject = {
    js : 'javascript',
    cpp: 'C++',
    rb : 'ruby',
    py : 'python',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
};

const programming = ['js','rb','py','cpp','swift','java']
for (const key in programming) {
    console.log(key)
};

const map1 = new Map()
map1.set('IN', 'India')
map1.set('USA', 'United States of America')
map1.set('FR', 'France')
map1.set('IN', 'India')

for (const key in map1) {
    console.log(map1)
}; ///this will show no result bcz we can not just do iteration like this on map.

//>>>>>>>>>>>for each loop:
const coding = ['js', 'python', 'ruby', 'java', 'cpp']

//(a)
coding.forEach(function (item){
    console.log(item)  //basic callback func 
})

//(b)
coding.forEach((item) => {
    console.log(item)  //callback func with arrow
});

//(c)
function printMe(item){
    console.log(item)
}
coding.forEach(printMe);

//(d)
coding.forEach((item, index, arr)=> {
    console.log(item , index, arr)
});


const myCoding = [
    {
        langName:'javascript',
        langFile:'js'
    },
    {
        langName:'python',
        langFile:'py'
    },
    {
        langName:'c++',
        langFile:'cpp'
    },
    {
        langName:'ruby',
        langFile:'rb'
    }
]

myCoding.forEach((item)=>{
    console.log(item.langName)
});





//the major between all the for loops is which show variable or keys
