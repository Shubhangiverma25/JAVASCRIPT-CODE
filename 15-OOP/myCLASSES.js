class User {
    constructor(username, email, password){
       this.username = username,
       this.email = email,
       this.password = password 
    }
    encryptPassword(){
        return `${this.password} xyz`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const me = new User('Shubhangi', 'shubh@123.com', '12345')
console.log(me.encryptPassword());
console.log(me.changeUsername())

///BEHIND THE SCENES>>>>>

function User(username, email, password){
    this.username = username,
    this.email = email,
    this.password = password 
};

User.prototype.encryptPassword = function(){
    return `${this.password} xyz`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()} xyz`
}


const myName = new User('Shubhangi', 'shubh@123.com', '12345')
console.log(myName.encryptPassword());
console.log(myName.changeUsername());