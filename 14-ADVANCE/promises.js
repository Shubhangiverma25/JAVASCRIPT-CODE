const promise1 = new Promise(function(resolve, reject){
    //do async calls, cryptography call, network call
    setTimeout(function(){
        console.log('async task is complete!')
        resolve()
    }, 1000)
})

promise1.then(function(){        //then ka connection h resolve k sath.
    console.log('promise consumed')
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2.')
        resolve()
    }, 1000)

}).then(function(){
    console.log('async 2 resolved!')
});

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName:'Chai', email:'Chai@example.com'})
    }, 1000)
})
promise3.then(function(user){
    console.log(user)
});

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:'shubhangi', password:'123'})
        } else {
            reject('ERROR: Something went wrong!')
        }
    }, 2000)
});
promise4.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log('The promoise is either resolved or rejected!'));


const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'javascript', password:'987'})
        } else {
            reject('ERROR: JS went wrong!')
        }
    }, 2000)
})

async function consumePromise5(){
    try{
        const response = await promise5
    console.log(response);
    } catch(error){
        console.log(error)
    }
}
consumePromise5()

/*async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
    } catch{
        console.log('E: ', error)
    }
}
getAllUsers();*/

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error));