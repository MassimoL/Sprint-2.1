//Exercici 3
function saludar(nom) {
    console.log('Hola ' + nom);
}

function esperarISaludar(nom, fn) {
    setTimeout(() => {
        fn(nom);
    }, 2000);
}

esperarISaludar('Roger', saludar);


//Exercici 4
function imprimir(element) {
    console.log(element + ' processat');
}

function processarElements(array, fn) {
    array.forEach(element => {
        fn(element);
    });
}

processarElements(['element1', 'element2', 'element3'], imprimir);