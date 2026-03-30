console.log('Cargando appjs'); //confirmando si inicia la clase desde la consola

//se crea una variable local que simplmente retendra el y creara los nuevos objetos persona con sus nuevos valores, nombre y apellido
let listaPersonas = [
    new Persona ('Johnder', 'Naranjo'),
    new Persona ('Esteban', 'Cano'),
    new Persona ('Juan', 'correa')
]
//creamos una funcion para mostrar nuestros nombres
function mostrarList(){
    /* console.log("Cargando funcion mostrarList()"); */ //confirmando si inicia la funcion desde la consola
    let text = ''; // Creamos una variable vacia que contendra las iteraciones de objetos persona creados de la clase persona.
    
    for (let persona of listaPersonas){
        console.log(`Nombre: ${persona.nombre} Apellido: ${persona.apellido}`) // debug de cada persona
        text += `<li>${persona.nombre} ${persona.apellido}</li>` // concatena item a la cadena
    }
    /* console.log(`${text}`); */
    document.getElementById('personaLista').innerHTML = (text); // actualiza lista en HTML con la lista ya cargada
    /* console.log(`Aca esta el error: ${text}`); */
}

function agregarPersona(){
    let formuA = document.getElementById('formu'); // capturamos el form por medio de una variable creada 'formuA(A se refiere a auxiliar xd)'
    let nombreA = formuA['nombreF']; // aca se obtiene el valor del input nombre desde el formulario
    let apellidoA = formuA['apellidoF']; // aca se obtiene el valor del input apellido desde el formulario

    /* console.log('Debuggeando funcion "agregarPersona"'); */

    if (nombreA.value != '' && apellidoA.value != ''){ // validamos que no se envien campos vacios
        let persona = new Persona (nombreA.value, apellidoA.value); // crea nueva Persona
        listaPersonas.push(persona); // agrega al arreglo la persona nueva creada por medio del metodo push (Agrega un nuevo valor a la lista creada previamente hasta lo ultimo de la cola)
        /* listaPersonas.push(nombreA,apellidoA); */
        return mostrarList(); // refresca la lista visible
    } else {
        alert('Campos vacios no se permiten. Porfavor registrar su nombre completo'); // aviso al usuario
    }
}