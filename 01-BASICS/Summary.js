//+++++++++++++++++++++++++++++++++++++++++++++++++
//stack memory => primitive datatypes
//heap memory => non-primitive datatypes

let myYoutubeName = "stydyIQ.com"
let anotherName = myYoutubeName;
anotherName= 'ChaiAurCode'

console.log(myYoutubeName); //--> studyIQ.com
console.log(anotherName); //--> ChaiAurCode

let user1 ={
    email:'user@google.com',
    upi: 'user@okhdfc'
}

let user2 = user1
user2.email ='shubhangi@google.com'

console.log(user1.email); //they both will be same bcz they have same 
console.log(user2.email); // reference from the memory.