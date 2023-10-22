function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);



function createUser(userName, score){
    this.userName = userName
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}

const chai = new createUser('chai', 25)
const tea = createUser('tea', 150)

chai.printMe();

/*
here's what happen behind the scenes when the new keyword is used:

01- a new object is created: the new keyword initiates the creatio of a new js object.

02- a prototype is linked: the newly created object gets linked to the prototype property of the constructor func. this means that it has acces to properties and methods defined on the constructor's prptotype.

03-the constructor is called: the constructor func is called with the specified arguments and this is bound to the newly created object. if no explicit return value is specified from the constructor. JS assumes this, the newly created object, to be the intended return value.

04- the new object is returned: after the constructor func has been called, if it doesnt return a non-primitive value(object, array, func, etc.), the newly created object is returned.
*/

