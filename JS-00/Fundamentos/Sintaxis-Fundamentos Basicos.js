/**
* *Primero para entender el lenguaje veremos la sintaxis que es lo mas basico para poder empezar a comprender los fundamentos
* *De un lenguaje, en este caso el hermoso e increible JavaScript, indisplensable y esencial para la creacion de paginas WEB   

* !JavaScript no es un lenguaje typado, lo cual puede ser arma de doble filo por su facilidad de escribir codigo y la dificultad
* ! de no poder hayar errores simples debido a estos problemas de falta de rigurosidad en su expresion.
/**


//? Las variables ¿Que es una variable?, La forma mas simple de explicar el significado de una variable es decirlo asi:
//?     Son un lugar donde vas a guardar con un nombre X la referencia o valor de otra cosa Y, para acceder facilmente a el.
//TODO:         Para explicarlo mejor e aquí el siquiguiente ejemplo:
        Se quiere guardar en una variable un valor de edad igual a 18, ¿cual seria el mejor nombre para esta?. ¡Exacto!, 'edad'.

        **ejemplo: 
//TODO  edad = 18

        **ejemplos similares:
//TODO  nombre = pablo, suma = a + b, pais = colombia;

//?Asi que para resumir, miremos las variables como una cajita donde se guardan cosas, referencias a cosas o instrucciones simples.
 */


//En javascript las variables se pueden declarar de 3 formas muy diferentes a lo usual en otros lenguajes:

// **Usamos [let] para definir una variablela cual puede almacenar cosas simples como todas las demas, solo que de forma [dinamica]

let ejemploLet = 'Hola mundo';
console.log(ejemploLet);
//TODO Resultado esperado: Hola mundo

//?Pero como dije esta variable puede ser cambiante o dinamica por lo cual si le asignamos un nuevo valor este aplica el nuevo.
ejemploLet = 'Hola mundo 2';
console.log(ejemploLet);
//TODO Resultado esperado: Hola mundo 2


//** La segunda forma es [const] esta sirve para decirle a la variable que se quede para siempre con su primer valor

const ejemplo = 'Hola mundo con CONST';
console.log(ejemplo);
//TODO Resultado esperado: Hola mundo con CONST

//?Si intentamos cambiar el valor de esta variable nos dara un error, ya que no se puede cambiar el valor de una variable declarada con const
// ejemplo = 'Hola mundo 2 con CONST'; //Esto nos dara un error porque no se puede cambiar el valor de una variable declarada con const 

//** La tercera forma es [var] esta es la forma mas antigua de declarar variables en JavaScript, y aunque sigue siendo valida, se recomienda no usarla debido a su comportamiento extraño en algunos casos, 
//**    como el hoisting (que es cuando una variable declarada con var se puede usar antes de ser declarada) y el scope (que es el alcance de una variable, var tiene un alcance global o de función, mientras que let y const tienen un alcance de bloque).

var ejemploVar = 'Hola mundo con VAR';
console.log(ejemploVar);
//TODO Resultado esperado: Hola mundo con VAR   

//?En resumen, se recomienda usar [let] para variables que pueden cambiar de valor, y [const] para variables que no deben cambiar de valor, y evitar usar [var] debido a su comportamiento extraño.
//?Tambien es importante mencionar que las variables pueden almacenar cualquier tipo de dato, como numeros, strings, booleanos, objetos, funciones, etc.

//** Por ejemplo, podemos almacenar un numero en una variable
let numero = 42;
console.log(numero);
//TODO Resultado esperado: 42

//** O podemos almacenar un string en una variable
let saludo = 'Hola mundo';
console.log(saludo);
//TODO Resultado esperado: Hola mundo

//** O podemos almacenar un booleano en una variable
let esVerdadero = true;
console.log(esVerdadero);
//TODO Resultado esperado: true

//** O podemos almacenar un objeto en una variable
let persona = {
    nombre: 'Pablo',
    edad: 30
};
console.log(persona);
//TODO Resultado esperado: { nombre: 'Pablo', edad: 30 }

//** O podemos almacenar una funcion en una variable
let sumar = function(a, b) {
    return a + b;
}

console.log(sumar(2, 3));
//TODO Resultado esperado: 5



// !Ahora pasaremos a hablar de las funciones, que son un bloque de codigo reutilizable que se puede ejecutar cuando se le llama por su nombre, y que puede recibir parametros y retornar un valor.

//** Para declarar una funcion en JavaScript, se puede usar la palabra clave [function] seguida del nombre de la funcion, y luego los parametros entre parentesis, y el bloque de codigo entre llaves.      
function saludar(nombre) {
    return `Hola ${nombre}`;
}
console.log(saludar('Pablo'));
//TODO Resultado esperado: Hola Pablo
//** Tambien se pueden declarar funciones de forma anonima, es decir, sin un nombre, y asignarlas a una variable. Estas se llaman funciones lambda o funciones flecha.
let saludarLambda = (nombre) => {
    return `Hola ${nombre}`;
}
console.log(saludarLambda('Pablo'));
//TODO Resultado esperado: Hola Pablo
//** Las funciones flecha tienen una sintaxis mas corta, y si el bloque de codigo es una sola linea, se pueden omitir las llaves y el return.
let saludarLambdaCorta = nombre => `Hola ${nombre}`;
console.log(saludarLambdaCorta('Pablo'));
//TODO Resultado esperado: Hola Pablo



//* *Ahora pasaremos a hablar de las clases, que son una forma de crear objetos en JavaScript, y que se introdujeron en la version ES6 del lenguaje. Las clases son una especie de molde o plantilla para crear objetos con ciertas propiedades y metodos.
//** Para declarar una clase en JavaScript, se usa la palabra clave [class] seguida del nombre de la clase, y luego el bloque de codigo entre llaves. Dentro del bloque de codigo se pueden declarar un constructor, que es una funcion especial que se ejecuta cuando se crea un objeto de la clase, y otros metodos que son funciones que pertenecen a la clase.

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }   
    saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}

let persona1 = new Persona('Pablo', 30);
console.log(persona1.saludar());
//TODO Resultado esperado: Hola, mi nombre es Pablo y tengo 30 años.


//** Las clases tambien pueden tener propiedades y metodos estaticos, que son aquellos que pertenecen a la clase en si, y no a los objetos creados con la clase. Para declarar una propiedad o metodo estatico, se usa la palabra clave [static] antes de su declaracion.
class Persona {
    static contadorPersonas = 0;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        Persona.contadorPersonas++;
    }
    saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
    static contarPersonas() {
        return `Hay ${Persona.contadorPersonas} personas creadas.`;
    }
}

let persona1 = new Persona('Pablo', 30);
let persona2 = new Persona('Maria', 25);
console.log(Persona.contarPersonas());
//TODO Resultado esperado: Hay 2 personas creadas.

//** En resumen, las clases son una forma de crear objetos en JavaScript, y se pueden usar para organizar el codigo y crear objetos con ciertas propiedades y metodos. Las clases pueden tener un constructor, que es una funcion especial que se ejecuta cuando se crea un objeto de la clase, y otros metodos que son funciones que pertenecen a la clase. 
//**    Las clases tambien pueden tener propiedades y metodos estaticos, que son aquellos que pertenecen a la clase en si, y no a los objetos creados con la clase. */