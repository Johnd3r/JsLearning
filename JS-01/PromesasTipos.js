/**
 *! Promesas en JavaScript: guía educativa línea por línea
 *
//? Una promesa representa una operación asíncrona.
//? Imagina una tarea que tardará un tiempo en completarse,
//? por ejemplo: pedir datos a un servidor o esperar a un temporizador.
 *
 * !Estado de una promesa:
 **  - pending: todavía no ha terminado.
 **  - fulfilled / resolved: terminó correctamente y entregó un valor.
 **  - rejected: terminó con un error.
 */




//TODO ---------------------------------------------------------
//TODO 1. Crear una promesa con resolve y reject
//TODO ---------------------------------------------------------

//? En JavaScript usamos "new Promise" para crear una promesa.
//* El constructor recibe una función con dos parámetros:
//* resolve -> se usa cuando la promesa se cumple correctamente.
//* reject  -> se usa cuando la promesa falla.

const validarPromesa = new Promise((resolve, reject) => {
    // Esta es la condición que decide si la promesa se cumple o se rechaza.
    const condicion = false;

    console.log('Iniciando la validación de la promesa...');

    if (condicion) {
        // Si la condición es verdadera, llamamos a resolve.
        // Eso pone la promesa en estado fulfilled.
        resolve('La promesa se resolvió correctamente.');
    } else {
        // Si la condición es falsa, llamamos a reject.
        // Eso pone la promesa en estado rejected.
        reject(new Error('La promesa se rechazó porque la condición es falsa.'));
    }
});




//TODO ---------------------------------------------------------
//TODO 2. Consumir la promesa: then, catch y finally
//TODO ---------------------------------------------------------

// Cuando tenemos una promesa, la usamos con métodos encadenados:
// then  -> se ejecuta si la promesa se resolvió con éxito.
// catch -> se ejecuta si la promesa fue rechazada.
// finally -> se ejecuta siempre, sin importar el resultado.
validarPromesa
    .then(resultado => {
        console.log('then: la promesa se cumplió con este valor ->', resultado);
    })
    .catch(error => {
        console.error('catch: la promesa se rechazó con este error ->', error.message);
    })
    .finally(() => {
        console.log('finally: siempre se ejecuta después de then/catch.');
    });

//TODO ---------------------------------------------------------
//TODO 3. Promesas con operaciones asíncronas (setTimeout)
//TODO ---------------------------------------------------------

// Aquí usamos setTimeout para simular una operación que tarda tiempo.
const promesaConTimeout = new Promise((resolve) => {
    console.log('Creando promesa con setTimeout...');

    // Esta función se ejecuta después de 3 segundos.
    setTimeout(() => {
        // Cuando termina el tiempo, resolvemos la promesa con un valor.
        resolve('Promesa con timeout resuelta después de 3 segundos.');
    }, 3000);

    console.log('Se llamó a setTimeout, la promesa sigue pending hasta que termine el tiempo.');
});

// Luego consumimos la promesa usando then.
promesaConTimeout.then(valor => {
    console.log('Resultado asíncrono:', valor);
});

//TODO ---------------------------------------------------------
//TODO 4. Async functions: una forma más clara de trabajar con promesas
//TODO ---------------------------------------------------------

// Una función marcada como "async" siempre devuelve una promesa.
async function saludarAsync() {
    // Aquí no escribimos "new Promise" directamente.
    // JavaScript envuelve el valor devuelto en una promesa automáticamente.
    return 'Hola desde async/await';
}

// También podemos lanzar un error dentro de una función async.
async function saludarAsyncError() {
    // Lanzar un error dentro de async equivale a rechazar la promesa.
    throw new Error('Este es un error dentro de async.');
}

// La función async devuelve una promesa, por eso podemos usar then/catch.
saludarAsync().then(valor => {
    console.log('async function:', valor);
});

saludarAsyncError()
    .then(valor => {
        console.log('Este valor nunca se mostrará:', valor);
    })
    .catch(error => {
        console.error('async function rejected:', error.message);
    });

//TODO ---------------------------------------------------------
//TODO 5. Await: esperar la promesa dentro de una función async
//TODO ---------------------------------------------------------

async function ejemploAwait() {
    console.log('ejemploAwait: iniciando...');

    // Creamos una promesa que se resuelve o se rechaza después de 2 segundos.
    const promesaLenta = new Promise((resolve, reject) => {
        const exito = false; // Cambia a true para simular éxito.

        setTimeout(() => {
            if (exito) {
                resolve('El await recibió el resultado de la promesa.');
            } else {
                reject(new Error('La promesa se rechazó dentro de await.'));
            }
        }, 2000);
    });

    try {
        // await pausa la ejecución de esta función hasta que promesaLenta termine.
        const resultado = await promesaLenta;
        console.log('ejemploAwait:', resultado);
    } catch (error) {
        console.error('ejemploAwait catch:', error.message);
    }

    console.log('ejemploAwait: terminado.');
}

// Llamamos a la función async que usa await.
ejemploAwait();

//TODO ---------------------------------------------------------
//TODO 6. Resumen rápido
//TODO ---------------------------------------------------------
// - Una promesa es un objeto que representa una tarea asíncrona.
// - new Promise(fn) crea la promesa y fn recibe resolve y reject.
// - resolve(valor) indica éxito y permite usar then(valor => ...).
// - reject(error) indica falla y permite usar catch(error => ...).
// - finally(() => ...) se ejecuta siempre, con éxito o falla.
// - async function devuelve automáticamente una promesa.
// - await detiene la ejecución dentro de la función async hasta que la promesa termina.
