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
    console.log("Las vocales son:", contarVocales);
    console.log("Las vocales son:", contarConsonantes);
}

vocalesString("niño", vocales);