function getRandomPassword(lengthPassword) {
    let password = '',
        i = 0;

    while (i < lengthPassword) {
        randomSymbol = getRandomSymbol()
        password += String.fromCharCode(randomSymbol.next().value);
        i++;
    }
    return password;
}

function* getRandomSymbol() {
    yield Math.floor(33 + Math.random() * (127 - 33));
}

console.log(getRandomPassword(5));
console.log(getRandomPassword(10));
console.log(getRandomPassword(8));