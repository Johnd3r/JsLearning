const vocales = ["a", "e", "i", "o", "u"];


const vocalesString = (palabra, vocales) => {

//objeto contador de vocales
const contarVocales = {};
//creamos un lugar donde guardar en un array las palabras divididas de la palabra a conocer ('Niño')
let palabraL = palabra.split(""); //lo esperado seria que guardara algo como ["n", "i", "ñ", "o"] 

//Se recorre cada item del array/palabra que se pasa
    palabraL.forEach((validarVocal) => {
        //acá se valida que la letra recorrida del array sea igual a la vocal iterada para poder registrarla en el objeto contador de vocales
        if(validarVocal === vocales[i]){
        //en caso de ser verdadera se valida si dentro del objeto ya esta la vocal registrada, en caso de que no y arroje "0" , a esa vocal se le suma un registro y se guarda dentro del obj. Y si lo existe anteriormente, se le suma un registro mas y se guarda su registro
        contarVocales[validarVocal] = (contarVocales[validarVocal] || 0) +1;
            ++vocales[i];
            ++validarVocal;
        }        
        //llegado el caso en el que la condicion de arriba no se cumpla, se itera a la
        else{
            ++vocales[i];
            --validarVocal;
        }
});

console.log("Las vocales son:", contarVocales)

}



vocalesString("niño", vocales);