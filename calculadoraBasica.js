const funcionInicial = () => {
    console.log("Hola Mundo");
}
/* const sumar = () => {
    let numeroA = getDocumentById('digitoA');
    let resText = "";
    let numeroB = getDocumentById('digitoB');
    let resultado = parseInt.numeroA + parseInt.numeroB;
    
} */

const sumar = () => {
    let calculadora = document.getElementById("calculadora");
    let num1 = calculadora['digitoA'];
    let num2 = calculadora['digitoB'];
    let res = parseFloatnum1.value + num2.value;
    document.getElementById('resultado').innerHTML = (`Resultado ${res}`);
}
