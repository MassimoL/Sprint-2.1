function printNumbers(arrayNum) {
    for (let i = 0; i < arrayNum.length; i++) {
        let a = () => ( arrayNum[i] );
        console.log(a());
    }
}

printNumbers([3, 6, 9, 12, 15]);