const des = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(des);
//

const obj = {
    name: 'Javascript',
    price: 1400,
    isAvailable: true,

    orderObj: function(){
        console.log('Object not defined')
    }
}
//console.log(Object.getOwnPropertyDescriptor(obj, 'price'));

Object.defineProperty(obj, 'price',{
    //writable: false,
    enumerable:true
})
//console.log(Object.getOwnPropertyDescriptor(obj, 'price'));

for (let [key, value] of Object.entries(obj)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`)
    }
};