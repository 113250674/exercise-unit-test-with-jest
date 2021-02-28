/// importar la función sum del archivo app.js
//const { fromDollarToYen,  fromEuroToDollar, fromYenToPound } = require('./app.js');

test("One euro should be 1.206 dollars", () => {
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2;

    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})


test("One euro should be 1.206 dollars", () => {
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const cantidadYenes = fromDollarToYen(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = (3.5 / 1.2) * 127.9;

    // hago mi comparacion (la prueba)
    expect(expected).toBe(cantidadYenes);
})

test("One yen should be 1.206 dollars", () => {
    const { fromYenToPound } = require('./app.js');
    const yen = fromYenToPound(1);
    const expected = (1 / 127.9) * 0.8;
    expect(expected).toBe(yen);
});







