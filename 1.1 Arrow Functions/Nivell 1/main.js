//Exercici 1
let add = (a, b) =>  a + b ;
console.log(add(3, 5));

//Exercici 2
let randomNumber = () =>  Math.floor(Math.random() * 101);
console.log(randomNumber());

//Exercici 3
class Person {

    constructor(name) {
        this.name = name;
        this.greet = () => 'Hello ' + this.name;
        
    }
}
let roger = new Person('Roger');
console.log(roger.greet());