/* Creo un ciclo for che scriva i numeri da 1 a 100 */
for (let i = 1; i <= 100; i++) {

    /* Definisco le variabili const fizz e buzz usando il quoziente */
    const fizz = (i % 3 == 0);
    const buzz = (i % 5 == 0);
    
    /* Pongo le condizioni */
    if (fizz && buzz) {
        console.log('FizzBuzz')
    }

    else if (fizz) {
        console.log('fizz')
    }

    else if (buzz) {
        console.log('buzz')
    }

    else {
        console.log(i)
    }
}