function divideByZero(a, b) {
    //+ converts to number
    let quotient = a / b;
    if (quotient !== quotient) {
        //Throw error
        throw new Error(a + "/ " + b);
    }
    return null;
    // return a / b;
}

function divideByZero1(a, b) {
    //+ converts to number
    if (b === 0) {
        return null;
    }
    return +((a / b).toFixed(2));
}

module.exports = divideByZero
module.exports = divideByZero1