//if
//<, >, <=, >=, ==, !=, ===, !==
const temp = 41

if(temp > 52){
    console.log('less than 50')
} else {
    console.log('temp is greater than 50')
};

const score = 200
if(score> 100){
    const power = 'fly'
    console.log(`user [power: ${power}]`)
}; //parent from child: no ; child from parent: yes

//const balance = 1000
//if(balance > 500) console.log('test');  //implicit condition

const balance = 1000
if(balance < 500){
    console.log('less than 500')
} else if (balance < 750){
    console.log('less than 750')
} else if (balance < 900){
    console.log('less than 900')
} else {
    console.log('less than 1200')
};

const userLoggedIn = true
const debitCard = true
const LoggedFromGoogle = false
const LoggedFromEmail = true

if(userLoggedIn && debitCard){  ///AND condition(&&)
    console.log('Allow to buy courses.')
};

if(LoggedFromEmail || LoggedFromGoogle){   ///OR condition(||)
    console.log('user logged in!')
}