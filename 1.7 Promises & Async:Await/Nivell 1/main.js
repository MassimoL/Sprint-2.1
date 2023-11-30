//Exercici 1
promesaSalutacio = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món! ');
    }, 2000);
});

promesaSalutacio.then((resultat) => {
    console.log(resultat);
});



//Exercici 2
promesaSalutacio

    .then((resultat) => {
        console.log(resultat);

    })

    .catch((error) => {
        console.log(error);
    });


//Exercici 3
promesaMixta = (input) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (input === 'Hola') {
                resolve('Salutacio rebuda');

            } else {
                reject('Error: L\'input no és "Hola"');
            }
        }, 2000);
    });
};

promesaMixta('Hola')
    .then((resultat) => {
        console.log(resultat);
    })
    .catch((error) => {
        console.error(error);
    });


//Exercici 4
promesaSalutacio2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hola, món!');
        }, 2000);
    });
};

funcioAsincro = async () => {
    try {
        let resultat = await promesaSalutacio2();
        console.log(resultat);
    } catch (error) {
        console.error(error);

    }
};

funcioAsincro();
