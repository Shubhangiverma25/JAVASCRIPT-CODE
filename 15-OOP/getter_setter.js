class user {
    constructor(email,password){
        this.email = email, 
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}
const shubhangi = new user('shubhangi@123.com', 'abcde')
console.log(shubhangi.password);
console.log(shubhangi.email); 

/////how to set and get via properties:::::(old method)
function User(email, password){
    this._email = email,
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
};
const me = new User('chai@chai.com', 'chaiaurcode')
console.log(me.email);
console.log(me.password);

/////object based setter and getter::::::
const myDB ={
    _email:'sv@123.com',
    _password:'sverma',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },
    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value
    },
};
const myName = Object.create(myDB)
console.log(myName.email);
console.log(myName.password);