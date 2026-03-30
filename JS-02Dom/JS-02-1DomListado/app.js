console.log('Cargando appjs'); //confirmando si inicia la clase desde la consola

//se crea una variable local que simplmente retendra el y creara los nuevos objetos persona con sus nuevos valores, nombre y apellido
let listaPersonas = [
    new Persona ('Johnder', 'Naranjo'),
    new Persona ('Esteban', 'Cano'),
    new Persona ('Juan', 'correa')
]
//creamos una funcion para mostrar nuestros nombres
function mostrarList(){
    console.log("Cargando funcion mostrarList()"); //confirmando si inicia la funcion desde la consola
    let text = ''; // Creamos una variable vacia que contendra las iteraciones de objetos persona creados de la clase persona.
    
    for (let persona of listaPersonas){
        console.log(`Nombre: ${persona.nombre} Apellido: ${persona.apellido}`)
        text += `<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('hola').innerHTML = (text);
    
}