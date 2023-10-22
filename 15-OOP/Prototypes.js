//let myName = 'Shubhangi     '
//let myChannel = 'chai     '

//console.log(myName.trueLength);

let myHeroes = ['superman', 'spiderman', 'drstrange']

let heroPower = {
    superman: 'strength',
    spiderman: 'web',
    drstrange: 'time',

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`)
    }
}

Object.prototype.shubhangi = function(){
    console.log(`shubhangi is present in all objects.`)
}

Array.prototype.heyShubhangi = function(){
    console.log('Shubhangi says HEllO!');
}

myHeroes.shubhangi();
myHeroes.heyShubhangi();
//heroPower.heyShubhangi();
//heroPower.shubhangi();


//////////INHERITANCE////////

const user = {
    name:'John',
    email:'John@1123.com'
}
const teacher = {
    makeVideo : true
}
const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

///modern syntax::::

Object.setPrototypeOf(teachingSupport, teacher);

let User2 = 'ChaiAurCode    '
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`);
};

User2.trueLength()
'Shubhangi'.trueLength();
'JohnMarkson'.trueLength();