//Exercici 1
let array1 = [1, 21, 6, 67, 10];
let array2 = [22, 37, 41, 7, 0];
let array3 = [...array1, ...array2];
console.log(array3);


//Exercici 2
function suma(...args) {
    let suma = 0;
    for(const arg of args) {
        suma += arg;
    }
    return suma;
}

console.log(suma(13, 33, 14, 3, 20, 9, 8, 0));