///////////CALL...

function setUserName(userName){
    this.userName= userName
}
function createUser(userName, email, password){
    setUserName.call(this,userName)
    this.email = email
    this.password = password
}

const User = new createUser('chai', 'chai@123.com', '0987')
console.log(User);