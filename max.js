// const jim = 84;
// const dela = 99;
// const chinku = 100;
// if(jim > dela && jim > chinku){
//     console.log('Jim wins');
// } else if(dela > jim && dela > chinku)
// {
//     console.log('Dela wins');
// }
// else {
//     console.log('Chinku wins');
// }
// console.log('winnder is ',Math.max(jim, dela, chinku))

function max(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if (num2 > num1 && num2 > num3){
        return num2;
    }
    else {
        return num3;
    }
}
console.log('bigger is ',max(11,22,33))