/* Creo un ciclo for che scriva i numeri da 1 a 100 */
for (let i = 1; i <= 100; i++) {

    /* Definisco le variabili const fizz e buzz usando il quoziente */
    const fizz = (i % 3 == 0);
    const buzz = (i % 5 == 0);
    const ulElem = document.querySelector('ul')
    const liElem = document.createElement('li')

    /* Pongo le condizioni */
    if (fizz && buzz) {
        console.log('FizzBuzz')
        ulElem.appendChild(liElem).innerHTML = "FizzBuzz"
        liElem.classList.add('bg-warning')
    }

    else if (fizz) {
        console.log('fizz')
        ulElem.appendChild(liElem).innerHTML = "Fizz"
        liElem.classList.add('bg-danger')
    }

    else if (buzz) {
        console.log('buzz')
        ulElem.appendChild(liElem).innerHTML = "Buzz"
        liElem.classList.add('bg-primary')
    }

    else {
        console.log(i)
        ulElem.appendChild(liElem).innerHTML = i
        liElem.classList.add('fw-bold')
    }
}