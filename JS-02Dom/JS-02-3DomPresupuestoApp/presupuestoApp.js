
const ingresos = [
    new Ingreso('Pasajes', 560),
    new Ingreso('Comida', 20)
]

const egresos = [
    new Egreso('Deuda', 480),
    new Egreso('Novia', 50)
]

const cargarApp = () => {
    cargarCabecero();
}

/* const prueba = () => {
    return 100, 200;
}
console.log(prueba()); // ¿ue imprime? */

const cargarCabecero = () => {
    console.log('hola :)');
    document.getElementById('dineroDisponible').innerHTML = `$${calcularDineroDisponible()}`;
    document.getElementById('totalIngresos').innerHTML = `$${calcularIngresosTotal()}`;
    document.getElementById('totalEgresos').innerHTML = `$${calcularEgresosTotal()}`;
    document.getElementById('porcentajeEgreso').innerHTML = `%${calcularPorcentajeEgreso()}`;
    document.getElementById('porcentajeIngreso').innerHTML = `%${calcularPorcentajeIngreso()}`;
}

const calcularDineroDisponible = () => {
    //se resta el total de ingresos con el total de egresos para sacar el dinero disponible
    let totalDisp = calcularIngresosTotal() - calcularEgresosTotal();
    /* totalDisp = `$`+totalDisp; */
    return totalDisp;
}

const calcularIngresosTotal = () => {
    //Esta funcion va a inciar un contador de dinero en 0 que va ir a ummentando extrayendo los valores de objetos Ingresos totales creados
    let ingresoTotal = 0;
    for (ingreso of ingresos){ //Lo que estamos haciendo aca es iterar con la variable ingreso cada objeto de la lista
        ingresoTotal += ingreso.valor; //cuando itera sobre un objeto accede a su valor lo cual se lo suma a ingreso total
    }
    return ingresoTotal; //al completar el recorrido de toda la lista devuelve el valor total final de la suma
}

const calcularEgresosTotal = () => {
    let egresoTotal = 0;
    for (egreso of egresos){
        egresoTotal += egreso.valor;
    }
    return egresoTotal;
}

const calcularPorcentajeEgreso = () =>{
    let porcentajeEgreso = calcularEgresosTotal()/calcularIngresosTotal()*100;
    porcentajeEgreso = porcentajeEgreso.toFixed(0);
    return porcentajeEgreso;
}

const calcularPorcentajeIngreso = () =>{
    let porcentajeIngreso = calcularPorcentajeEgreso()/calcularIngresosTotal()*100;
    porcentajeIngreso = porcentajeIngreso.toFixed(0);
    return porcentajeIngreso;
}