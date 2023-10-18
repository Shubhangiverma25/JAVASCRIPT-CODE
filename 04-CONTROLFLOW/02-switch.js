switch(key){
    case value:
        break;

    default:
        break;
};  //this is a basic syntax for switch operator.

const month = 3
switch (month) {
    case 1:
        console.log('jan')
        break;
    case 2:
        console.log('feb')
        break;
    case 3:
        console.log('mar')
        break;
    case 4:
        console.log('apr')
        break;

    default:
        console.log('default case match!')
        break;
};

const months = 'jan'
switch (months) {
    case 'jan':
        console.log('jan')
        break;
    case 'feb':
        console.log('feb')
        break;
    case 'mar':
        console.log('mar')
        break;
    case 'apr':
        console.log('apr')
        break;

    default:
        console.log('default case match!')
        break;
};

////break is v imp. if its not there your code will not work, going to throw an error. also if there is no brk then the whole code will be executed EXCEPT default one. it will not execute.