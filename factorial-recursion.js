//6!=6*5*4*3*2*1
// let fact = 1;
// for (let i = 6; i >= 1; i--) {
//     fact = fact * i;
// }
// console.log(fact);

function fact(i) {
    if (i == 1) {
        return 1;
    }
    return fact(i-1)*i;
}
console.log(fact(6));