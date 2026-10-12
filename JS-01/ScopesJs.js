
let globalScope = 1;
console.log("Rango A");

function functionScope () {
    console.log("Rango B");
    let num = 0;

    function sumar(num0){
        console.log("Rango C");
        return console.log(num+num0);
    }

    return sumar(globalScope);
}

console.log(sumar(globalScope));


//Variable global, puntaje global
let points = 100;
//Funcion
function jugar () {
    //Variable local de la funcion, cambia valor de points a 50
    let points = 50;
    //bonus se encarga de traer un parametro y sumarlo con el valor de points local y retornar su resultado por medio de sumar
    function bonus (cantidad) {
        sumar = console.log(points + cantidad);
        return sumar;
    }
    //retorna 75 al pasarle 25 como cantidad
    return bonus(25);

}
//se ejecuta y suma 50+25 = 75
jugar();
//muestra 100, porque esta tomando el valor global no uno interno
console.log(points);