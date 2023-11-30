//Exercici 3
let objecte1 = {
    nom: 'Ordinador',
    preu: 1250
}

let objecte2 = {...objecte1};
objecte2.preu = 2400;

console.log(objecte1, objecte2);


//Exercici 4
let a, b, rest;
[a, b, ...rest] = [31, 25, 'palabra', 4, 'otra'];
console.log(a);
console.log(b);
console.log(rest);