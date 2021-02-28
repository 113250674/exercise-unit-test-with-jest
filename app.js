

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

//ocupamos pasar de dolar a euro
//construimos la funcion

const fromDollarToYen = function fromDollarToYen(dollar) {
    let resultado = (dollar / oneEuroIs.USD) * oneEuroIs.JPY;
    return resultado;
}

const fromEuroToDollar = function fromEuroToDollar(euro) {
    let resultado = (euro * oneEuroIs.USD);
    return resultado;

}

const fromYenToPound =function fromYenToPound(yenes) {
    let resultado = (yenes / oneEuroIs.JPY) * oneEuroIs.GBP;
    return resultado;
};

console.log(fromYenToPound(1))
console.log(fromEuroToDollar(1))
console.log(fromDollarToYen(1))

module.exports = { fromDollarToYen,  fromEuroToDollar, fromYenToPound};



