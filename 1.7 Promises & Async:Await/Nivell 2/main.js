promesaSalutacio3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hola, món! ');
        }, 2000);
    });
};

funcioAsinc = async () => {
    try {
        let resultat = await promesaSalutacio3();
        console.log(resultat);
    } catch (error) {
        console.error(error);
    }
};

funcioAsinc();

