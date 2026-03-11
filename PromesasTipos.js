//En esta sección de javascript tratare de empezar a aprender promesas en Javascript, para esto usare el siguiente ejemplo:
const miPromesa = new Promise((resuelto, noResuelto) => { 
    let validar = false;
    if (validar == true) {
        console.log("La promesa se ha resuelto");
    }
        else{
            console.log("paila manito");
        }
});
/////////////////////////////////////////////////////////////////////
//forma de ejecutar una promesa 1. sin metodo catch
/* miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
); */
//forma de ejecutar una promesa 2. con metodo catch
/* miPromesa
.then(valor => console.log(valor)) // si se cumple
.catch(error => console.log(error)); // si falla
.finnally(() => console.log("terminó")); //siempre se ejecuta */ 

/////////////////////////////////////////////////////////////////////
//Promesas con timeSetout
let promesa2 = new Promise((respu) => {
    console.log("Inicializando promesa 2");
    /* setTimeout( ejec = console.log("Ejecutada promesa 2"), 3000 ); */ //mal definida
    setTimeout( () => respu('Promesa 2 con setTimeOut ejectuada'), 3000); //Se inizializa el metodo setTimeOut y se le asigna una funcion flecha la cual esta pasando una variable respuesta con un string y se va emitir luego de haber pasado 3 segundos
    //Se ejecuta el set timeout despues de 3 segundos(3000ms)
    console.log("Finalizando promesa 2");
});

promesa2.then(valor => console.log(valor));
/////////////////////////////////////////////////////////////////////
//la notacion o metodo "Async" es una forma mas simple de hacer promesas en js, a comparacion de la forma anterior.
async function promesaAsy(){
    return "Saludo con Async";
}

promesaAsy().then(valor => console.log(valor));

//Metodo Async con await y setTimeOut

/* async function Async2(rs){
    console.log('incializando la vuelta');
    setTimeout( () => rs('Async2 inicializado!'), 5000);
    console.log(await rs);
    console.log('finalizo la vuelta');
}

Async2().then( () => valor(console.log(valor))); */

async function Async2(){
    let promise = new Promise((rs) => {
    console.log('incializando la vuelta');
    setTimeout( () => rs('Async2 inicializado!'), 5000);
    console.log('finalizo la vuelta');
    });
    console.log(await promise);
}

Async2();