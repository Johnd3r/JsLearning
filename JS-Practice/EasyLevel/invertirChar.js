
const validarPalindroma = (palabra) => {

const palabraNormal = palabra.toLowerCase();
let palabraAlRevez = palabra.split("").reverse().join(""); // usamos el metodo de arraydear la palabra pasada como parametro con 'split', luego la reverseamos con el metodo reverse --> esrever, despues concatenamos todo con el metodo join y le pasamos como parametro "," para eliminar los , que hay entre las palabras y formar un solo string

if (palabraAlRevez === palabra){  //validamos si la palabra es tal cual del mismo tipo y valor y asi confirmar si es palindroma
    console.log(`La palabra ${palabra} es palindroma, se escribe igual al derecho y al revez`);
    console.log("palabra normal: ", palabra);
    console.log("palabra alrevez: ", palabraAlRevez);
    console.log("----------------------------------------------------------------------------------")    
} else{ // si no es palindroma se arroja el porque y la diferencia de las palabras 
        console.log(`La palabra ${palabra} no es palindroma, se escribe diferente al derecho y al revez: ¡${palabra} <>  ${palabraAlRevez}!`);
        console.log("palabra normal: ", palabra);
        console.log("palabra alrevez: ", palabraAlRevez);
        console.log("----------------------------------------------------------------------------------")
    }
}

//Valores random para testear
validarPalindroma('radar'); //palindroma radar === radar
validarPalindroma('amor'); //no palindroma amor !== roma
validarPalindroma('reconocer'); //palindroma reconocer === reonocer
validarPalindroma('arroz'); // no palindroma arroz !== zorra