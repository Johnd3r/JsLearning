const par_o_no = (num) => {
    if (num % 2 == 0){
        console.log('Es par: ',num);
    }
    else {
        console.log('No es par: ',num);
    }
}
par_o_no(4);  // debería devolver true
par_o_no(7);  // debería devolver false

/////////////////////////////////////////////////////////////////////////////
const may = (list, num) => {
    let lmay = [];

    list.forEach((numero) => {
        if (numero > num){
            lmay = lmay.push(numero);
        }
    });

    return lmay;
}

may([1, 8, 3, 9, 2, 6], 5);
// debería devolver [8, 9, 6]

/////////////////////////////////////////////   ////////////////////////////////
const contarLetra = (text, letra) => {

const contadorStr = {};

    text.split("").forEach(char => {
        if (char === letra){
            contadorStr[letra] = (contadorStr[letra] || 0) + 1;
        }
    });

return contadorStr[letra];

}

contarLetra("hola mundo", "o");
// debería devolver 2

/////////////////////////////////////////////////////////////////////////////
const persona = {
    nombre: "Johnder",      
    edad: 21,               
    ciudad: "Medellín",     
    
    saludar: function() {

        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

persona.saludar();  // Hola, soy Johnder y tengo 21 años
/////////////////////////////////////////////////////////////////////////////

//Sacar numero maximo, minimo y el promedio de un array.
const analizar = ( array ) => {

let may = 0;
let min = 0;
let prom = 0;

array.forEach(num => {
    if (num > may){
        may = num;
    }
    if (num < min){
        min = num;
    }
    prom = num+prom;
});

prom = prom / array.push();
console.log(` maximo: ${may}, minimo: ${min}, promedio ${prom}`);


}
analizar ([5,2,8,1,9]);
//Deberia devolver los numeros { maximo: 9, minimo: 1, promedio 5 };