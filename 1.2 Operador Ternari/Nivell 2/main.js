function valor(num) {
    return num > 0 ? 'num és positiu' : num < 0 ? 'num és negatiu' : 'num és zero'
}

console.log(valor(-2));
console.log(valor(0));
console.log(valor(6));

function trobarMaxim(a, b, c) {
    if (a == b == c) return 'a, b i c són iguals';
    return a > b ?
        (a > c ? 'a és el nombre més gran' : 'c és el nombre més gran')
        : b > c ? 'b és el nombre més gran' : 'c és el nombre més gran';
}

console.log(trobarMaxim(1, 22, 33)); 
console.log(trobarMaxim(11, 12, 2)); 
console.log(trobarMaxim(7, 21, 10)); 
console.log(trobarMaxim(12, 11, 33)); 
console.log(trobarMaxim(23, 6, 1)); 
console.log(trobarMaxim(3, 3, 3)); 