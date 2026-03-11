'use strict' //esto se usa para poder usar el modo estricto de js, que evita errores comunes y hace que sea mas seguro escribir codigo.

//Creacion de funcion simple normal
function funcionNormal (){
    let hola = "hello";
}

//Creacion de funcion flecha simple
const funcionflecha = () => console.log("hola");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funcion callback con arrrow function.
//una funcion callback es aquel tipo de funcion que se llama asi misma dentro de si, en este ejemplo veremos como se usa
const arrowFuc = (callback) => {//Creamos funcion flecha normal de toda la vida pasandole como parametro la funcion callback que va hacer la logica interna de si misma
    let saludo = "Hola :)"; //1. Se declara un mensaje asignado a una variable creada dentro de la funcion con el nombre de "saludo"
    callback(saludo);//2. la funcion callback va guardar la direccion de saludo pasandola como parametro
}
//creamos una funcion flecha que va pasar como valor "mensaje" e imprimiendo asi su contenido
const llamarSaludoCallBack = (mensaje) => console.log(mensaje); 
//ejecutamos e inciamos la funcion flecha callback que incializamos arriba y pasamos como parametro la funcion con el contenido que le pasaremos como valor parametro a esa funcion callback pudiendo asi efectuar su contenido
arrowFuc(llamarSaludoCallBack);//Ejecucion de todo el contenido!

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ejemplo de uso timer y set Interval

const timerTest = () => { //funcion flecha, no recibe nada en parametros ya que es una funcion independiente y solo devuelve un valor de si misma.
    let numberxd = 0; //declaracion simple de variable
    for (let i = 1; i<6; i++){ //bucle for simple para iterar 5 veces y aumentar el valor de numberxd en 1 cada vez
        numberxd = ++numberxd;//aumento de valor
    };
    return numberxd;//termmina el for y retorna el valor final de numberxd
}
const imprimir = () => console.log(timerTest()); //funcion flecha simple de console.log

setInterval(() => setTimeout(imprimir, 3000), 2000); //setInterval es una funcion que ejecuta una funcion cada cierto tiempo, en este caso
// cada 2 segundos, y dentro de esa funcion se ejecuta un setTimeout que ejecuta la funcion imprimir despues de 3 segundos. 
// Esto hace que cada 2 segundos se ejecute la funcion imprimir despues de 3 segundos, 
// lo que hace que se imprima el resultado de timerTest cada 5 segundos.
