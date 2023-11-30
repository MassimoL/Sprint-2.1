//Exercici 1
function callbackFunc(nombre) {
    console.log(nombre);
}

function processar(nombre, fn) {
    fn(nombre);
}

processar(7, callbackFunc);


//Exercici 2
function add(n1, n2) {
    return n1 + n2;
}

function calculadora(n1, n2, fn) {
    console.log(fn(n1, n2));
}

calculadora(10, 21, add);