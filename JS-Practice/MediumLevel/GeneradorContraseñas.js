const crypto = require("crypto");

function passwordGenerator (tamano) {

    const minusculasDic = "abcdefghijklmnopqrstuvwxyz";

    const mayusculasDic = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const numerosDic =  "0123456789";

    const simbolosDic = "!@#$%^&*()_-+=[]{}|;:,.<>?";

    const grupos = [minusculasDic,mayusculasDic,numerosDic,simbolosDic];

    const todos = grupos.join("");

}

console.log(passwordGenerator(16));