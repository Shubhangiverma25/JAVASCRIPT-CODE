//var a = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log('inner:',a)
};
console.log(a);
//console.log(b);
//console.log(c);

for(let i=0; i < array.length; i++){
    const element = array[i]
};


function one(){
    const username ='shubhangi'

    function two(){
        const website = 'youtube'
        console.log(username);
    }
    console.log(website);

    two()
}
one() 

if(true){
    const username = 'shubhangi'
    if(username === 'shubhangi'){
        const website = ' youtube'
        console.log(username + website)
    }
    console.log(website);
}
console.log(username);

///+++++++++++++++intresting++++++++++++++++//

addone(5)
function addone(num){
    return num + 1
};

addtwo(5)   
const addtwo = function(num){
    return num + 2
};

///in both the cases we put our function on the top of it. in first case, we declared our function but in second case we declared function as well as we gave the variable to it. this is the reason the second code throw the error bcz we put 'addtwo' before the initialization.

