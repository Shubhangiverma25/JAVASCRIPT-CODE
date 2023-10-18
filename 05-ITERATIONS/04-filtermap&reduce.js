const coding = ['js', 'python', 'ruby', 'java', 'cpp']

const values = coding.forEach((item) => {
    console.log(item)
    return item
})
console.log(values);  //fro each dont return the values

const myNums = [1,2,3,4,5,6,7,8,9,10]  //filter does return the value

//const newNums = myNums.filter((num) => {
    //return num > 4
//})

const newNums = []
myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums);

const books = [
    {title:'book 1', genre:'science', publish: 1986, edition: 2008},
    {title:'book 2', genre:'history', publish: 2009, edition: 2015},
    {title:'book 3', genre:'non-fiction', publish: 1994, edition: 2006},
    {title:'book 4', genre:'suspense', publish: 1956, edition: 2009},
    {title:'book 5', genre:'science', publish: 1874, edition: 1999},
    {title:'book 6', genre:'fiction', publish: 1931, edition: 2003},
    {title:'book 7', genre:'science', publish: 1999, edition: 2017},
    {title:'book 8', genre:'romance', publish: 2000, edition: 2014},
    {title:'book 9', genre:'action n thrill', publish: 1893, edition: 2010}
];

//const userBooks = books.filter((item) => item.genre === 'science' )
const userBooks = books.filter((item) => item.edition >= 2000 && item.genre === 'science')
console.log(userBooks);

//==================================================//

const numbers = [1,2,3,4,5,6,7,8,9,10]
//const newNumbers = numbers.map((num) => num + 10)

//+++++++CHAINING+++++++//
const newNumbers = numbers
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 50)
console.log(newNumbers);


//===================REDUCE METHOD==================//

const mynum = [1,2,3,4]
const total = mynum.reduce((acc, curval) => acc + curval, 0)
console.log(total);
//const total = mynum.reduce(function(acc, curval) {
    //console.log(`acc: ${acc} and curval : ${curval}`);
    //return acc + curval
//}, 0)

const shoppingCart = [
    {   
        itemName: 'js course',
        price: 1899
    },
    {   
        itemName: 'py course',
        price: 1599
    },
    {   
        itemName: 'rb course',
        price: 2000
    },
    {   
        itemName: 'java course',
        price: 1400
    },
    {   
        itemName: 'bs course',
        price: 899
    },
];

const totalPaid = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(totalPaid);