class User {
    constructor(username){
        this.us = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`)
    }
    static createID(){
        return `12345`
    }
}

const Shubhangi = new User('shubhangi')
//console.log(Shubhangi.createID());

class teacher extends User {
    constructor(username,email){
        super(username)
        this.email
    }
}
const ip = new teacher('iphone', 'i@phone.com')
console.log(ip.createID());