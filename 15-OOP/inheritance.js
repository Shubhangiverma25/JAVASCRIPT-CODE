class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}
class teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email,
        this.password = password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}
const myName = new teacher('Shubhangi', 'shubhangi@123.com', '202020');
myName.addCourse(); 

const masalaChai = new User('masalaChai')

masalaChai.logMe();
console.log(myName === masalaChai);
console.log(myName instanceof User);