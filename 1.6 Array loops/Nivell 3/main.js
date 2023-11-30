let noms = ['Anna', 'Bernat', 'Clara'];

for (const name of noms) {
    console.log(name, noms.indexOf(name));
}

console.log('---------------');
console.log('Segon mètode:');

for (const [index, nom] of noms.entries()) {
    console.log(nom, index);
}