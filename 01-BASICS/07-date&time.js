//DATES

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate); //it is an object

let myCreatedDate = new Date('2024-01-07');
//let myCreatedDate = new Date(2023, 10, 24);
//let myCreatedDate = new Date(2023, 10, 24 ,5 ,3);
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));  //converting in seconds. here weare using math floor to avoid decimals 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getMinutes());

newDate.toLocaleString('default', {
    weekday: "long"
});