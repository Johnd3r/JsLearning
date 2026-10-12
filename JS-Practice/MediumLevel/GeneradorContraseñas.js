function passwordGenerator (tamano) {

    const minusculasDic = "abcdefghijklmnopqrstuvwxyz";

    const mayusculasDic = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const numerosDic =  "0123456789";

    const simbolosDic = "!@#$%^&*()_-+=[]{}|;:,.<>?";

    const grupos = [minusculasDic,mayusculasDic,numerosDic,simbolosDic];//abcdefghijklmnopqrstuvwxyz,ABCDEFGHIJKLMNOPQRSTUVWXYZ,0123456789,!@#$%^&*()_-+=[]{}|;:,.<>?

    const todos = grupos.join("");

    const password = [];

    let indice;

    do {
        i=+1;    
        indice = Math.floor(Math.random() * todos.length);
        //16//45
        //(abcdefghijklmnopqrstuvwxyz,ABCDEFGHIJKLMNOPQRSTUVWXYZ,0123456789,!@#$%^&*()_-+=[]{}|;:,.<>?)
        for (let j = 0; j !== indice; j+= 1){
            password.push(j);
            //password = [j@]
        }
        password.push(indice);
        console.log(indice);
        console.log(password);
    } while (i < tamano);

}

console.log(passwordGenerator(16));