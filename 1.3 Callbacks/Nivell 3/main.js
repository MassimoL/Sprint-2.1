function imprmirCadena(cadena) {
    console.log(cadena);
}

function processarCadena(cadenaChars, fn) {
    cadenaChars = cadenaChars.toUpperCase();
    fn(cadenaChars);
}

processarCadena('caracteres minúsculas convertidos a mayúsculas', imprmirCadena);