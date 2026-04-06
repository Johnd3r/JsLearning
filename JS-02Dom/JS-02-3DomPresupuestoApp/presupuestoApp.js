
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
    document.getElementById('dineroDisponible').innerHTML = `$${calcularDineroDisponible().toFixed(2)}`;
    document.getElementById('totalIngresos').innerHTML = `$${calcularIngresosTotal().toFixed(2)}`;
    document.getElementById('totalEgresos').innerHTML = `$${calcularEgresosTotal().toFixed(2)}`;
    document.getElementById('porcentajeEgreso').innerHTML = `%${calcularPorcentajeEgreso().toFixed(1)}`;
    document.getElementById('porcentajeIngreso').innerHTML = `%${calcularPorcentajeIngreso().toFixed(1)}`;
    /* console.log(typeof (580).toFixed(2)); */
}

const calcularDineroDisponible = () => {
    //se resta el total de ingresos con el total de egresos para sacar el dinero disponible
    let totalDisp = calcularIngresosTotal() - calcularEgresosTotal();
    /* totalDisp = totalDisp.toFixed(2); */
    return totalDisp;
}

const calcularIngresosTotal = () => {
    //Esta funcion va a inciar un contador de dinero en 0 que va ir a ummentando extrayendo los valores de objetos Ingresos totales creados
    let ingresoTotal = 0;
    for (let ingreso of ingresos){ //Lo que estamos haciendo aca es iterar con la variable ingreso cada objeto de la lista
        ingresoTotal += ingreso.valor; //cuando itera sobre un objeto accede a su valor lo cual se lo suma a ingreso total
    }
    return ingresoTotal; //al completar el recorrido de toda la lista devuelve el valor total final de la suma
}

const calcularEgresosTotal = () => {
    let egresoTotal = 0;
    for (let egreso of egresos){
        egresoTotal += egreso.valor;
    }
    return egresoTotal;
}

const calcularPorcentajeEgreso = () =>{
    let porcentajeEgreso = calcularEgresosTotal()/calcularIngresosTotal()*100;
    return porcentajeEgreso;
}

const calcularPorcentajeIngreso = () =>{
    let porcentajeIngreso = calcularDineroDisponible()/calcularIngresosTotal()*100;
    return porcentajeIngreso;
}
