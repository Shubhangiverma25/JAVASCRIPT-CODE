//Object Literal
const user = {
    userName: 'shubhangi',
    loginCount: 9,
    signedOut: true,

    getUserDetails: function(){
        //console.log('Got user details from database.')
        console.log(this);
    }
    
}
console.log(user.userName);
console.log(user.getUserDetails());

//constructor:
 
function User(username,loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const user1 = new User('shubhangi', 12 , true)
const user2 = new User('ChaiAurCode', 11, false)
console.log(user1);
console.log(user2);