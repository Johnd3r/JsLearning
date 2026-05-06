const fizzBuzzFunction = (numero) => {
    
    if ((numero % 3 === 0) && (numero % 5 === 0)){
        console.log('FizzBuzz', numero);
    }else if (numero % 3 === 0) {
        console.log('Fizz', numero);
    } else if (numero % 5 === 0 ) {
        console.log('Buzz', numero);
    }else{
        console.log(numero)
    }

}

const genNumbers = () => { 

    for ( let i = 1 ; i < 101; i++ ) {
        fizzBuzzFunction(i);
    }

}

genNumbers();