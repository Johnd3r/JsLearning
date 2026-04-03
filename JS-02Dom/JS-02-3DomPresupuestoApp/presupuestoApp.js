
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
    document.getElementById('dineroDisponible').innerHTML = calcularDineroDisponible();
    document.getElementById('totalIngresos').innerHTML = calcularIngresosTotal();
    document.getElementById('totalEgresos').innerHTML = calcularEgresosTotal();
    document.getElementById('porcentajeEgreso').innerHTML = calcularPorcentajeEgreso();
}

const calcularDineroDisponible = () => {
    //se resta el total de ingresos con el total de egresos para sacar el dinero disponible
    let totalDisp = calcularIngresosTotal() - calcularEgresosTotal();
    return totalDisp;
}

const calcularIngresosTotal = () => {
    //Esta funcion va a inciar un contador de dinero en 0 que va ir a ummentando extrayendo los valores de objetos Ingresos totales creados
    let ingresoTotal = 0;
    for (ingreso of ingresos){
        ingresoTotal += ingreso.valor;
    }
    return ingresoTotal;
}

const calcularEgresosTotal = () => {
    let egresoTotal = 0;
    for (egreso of egresos){
        egresoTotal += egreso.valor;
    }
    return egresoTotal;
}

const calcularPorcentajeEgreso = () =>{
    let porcentajeEgreso = calcularIngresosTotal() /calcularEgresosTotal();
    return porcentajeEgreso;
}
/* const registroDatos = () => {
    let ingresoDatos = [Ingreso(registroDatos)];
    let EgresoDatos = [Egreso(registroDatos)];
 } */