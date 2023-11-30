function parOImpar(arrayNums) {
    arrayNums.forEach(element => {
        console.log(element%2 === 0 ? element + ' és parell' : element + ' és imparell');
    });
}

parOImpar([11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 101]);