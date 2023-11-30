//Exercici 5
function fn(arg1, arg2, arg3) {
    console.log(arg1 + arg2 + arg3);
}

let array1 = [11, 22, 3];
fn(...array1);


//Exercici 6
let obj1 = {
    a: 34,
    b: 12
}

let obj2 = {
    c: 11,
    d: 9
}

let obj3 = {...obj1, ...obj2};
console.log(obj3);