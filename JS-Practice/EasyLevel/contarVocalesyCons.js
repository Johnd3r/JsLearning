const vocales = ["a", "e", "i", "o", "u"];


const vocalesString = (palabra, vocales) => {
//objeto contador de vocales
const contarConsonantes = {}
const contarVocales = {};
//creamos un lugar donde guardar en un array las palabras divididas de la palabra a conocer ('Niño')
let palabraL = palabra.split(""); //lo esperado seria que guardara algo como ["n", "i", "ñ", "o"] 
//Se recorre cada item del array/palabra que se pasa
    palabraL.forEach((letraIterada) => {
        //acá se valida que en el array de vocales haya lo mismo que en la letra iterada de la palabra obtenida 'letraIterada', es decir, la 
        if(vocales.includes(letraIterada)){
        //en caso de ser verdadera se valida si dentro del objeto ya esta la vocal registrada, en caso de que no y arroje "0" , a esa vocal se le suma un registro y se guarda dentro del obj. Y si lo existe anteriormente, se le suma un registro mas y se guarda su registro
        contarVocales[letraIterada] = (contarVocales[letraIterada] || 0) +1;
        }        
        else{
            contarConsonantes[letraIterada] = (contarConsonantes[letraIterada] || 0) +1;
/*             console.log(`La letra ${letraIterada} no es una vocal.`); */
        }

    });
    return {contarConsonantes, contarVocales};
}

const totContarVocales = (contarVocales) => { 
    return Object.values(contarVocales).reduce((acc, cur) => acc + cur, 0);
};
const totContarConsonantes = (contarConsonantes) => { 
    return Object.values(contarConsonantes).reduce((acc, cur) => acc + cur, 0);
};


const resultado = vocalesString("niños", vocales);

console.log("Total de vocales en la palabra:", totContarVocales(resultado.contarVocales));
console.log("Total de vocales en la palabra:", totContarConsonantes(resultado.contarConsonantes));
console.log("Las vocales son:", resultado.contarVocales);
console.log("Las consonantes son:", resultado.contarConsonantes);