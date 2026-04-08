
const ingresos = [
    new Ingreso('Pasajes', 560),
    new Ingreso('Comida', 20)
]

const egresos = [
    new Egreso('Deuda', 480),
    new Egreso('Novia', 50)
]
//funcion que se encarga de generar toda la App (Medio inecesario pensaria la verdad)
const cargarApp = () => {
    cargarCabecero();
    cargarIngreso();
    cargarEgreso();
}
//Esta funcion se encarga de extraer los DOM del html a convenir, y luego se les inyecta los nuevos valores al documento por medio del manejo de DOM
const cargarCabecero = () => {
    console.log('hola :)');
    // Aca usamos template literals para darle formato a los valores, y adicional le ponemos el metodo 'toFixed()', este metodo se encarga de limitar los decimales de los numeros a x cantidad, y cuando lo hace pasa un valor tipo Strng.
    document.getElementById('dineroDisponible').innerHTML = `$${calcularDineroDisponible().toFixed(2)}`;
    document.getElementById('totalIngresos').innerHTML = `$${calcularIngresosTotal().toFixed(2)}`;
    document.getElementById('totalEgresos').innerHTML = `$${calcularEgresosTotal().toFixed(2)}`;
    document.getElementById('porcentajeEgreso').innerHTML = `%${calcularPorcentajeEgreso().toFixed(1)}`;
    document.getElementById('porcentajeIngreso').innerHTML = `%${calcularPorcentajeIngreso().toFixed(1)}`;
    /* console.log(typeof (580).toFixed(2)); */ //Esto fue un debug para observar que tipo de dato devolvia despues de apliar el metodo, en efecto fue String
}

//Esta funcion se encarga de mostrar el balance disponible con respecto a los egresos e ingresos.
const calcularDineroDisponible = () => {
    //se resta el total de ingresos con el total de egresos para sacar el dinero disponible
    let totalDisp = calcularIngresosTotal() - calcularEgresosTotal();
    /* totalDisp = totalDisp.toFixed(2); */ //Principalmente lo tenia en las funciones porque no sabia que el metodo convertia los valores a string asi que fue un error retornar los valores con el metodo desde acá
    return totalDisp;
}
//Esta funcion se encarga de calcular los ingresos totales
const calcularIngresosTotal = () => {
    //Esta funcion va a inciar un contador de dinero en 0 que va ir a ummentando extrayendo los valores de objetos Ingresos totales creados
    let ingresoTotal = 0; //Iniciamos una variable en 0 de tipo acumulador para sacar el total de los ingresos
    for (let ingreso of ingresos){ //Lo que estamos haciendo aca es iterar con la variable ingreso cada objeto de la lista
        ingresoTotal += ingreso.valor; //cuando itera sobre un objeto accede a su valor lo cual se lo suma a ingreso total
    }
    return ingresoTotal; //al completar el recorrido de toda la lista devuelve el valor total final de la suma
}
//Esta funcion se encarga de calcular los Egresos totales
const calcularEgresosTotal = () => {
    let egresoTotal = 0;
    for (let egreso of egresos){
        egresoTotal += egreso.valor;
    }
    return egresoTotal;
}

//Esta funcion se encarga de calcular el porcentaje de egreso respecto al total de ingresos, para saber cuanto se gasto de todo el dinero
const calcularPorcentajeEgreso = () =>{
    let porcentajeEgreso = calcularEgresosTotal()/calcularIngresosTotal()*100; //regla basica de 3 para sacar porcentaje --> x/y*z = xyz%
    return porcentajeEgreso;
}

//Esta funcion se encarga de calcular el porcentaje de ingreso excedente respecto a los egresos
const calcularPorcentajeIngreso = () =>{
    let porcentajeIngreso = calcularDineroDisponible()/calcularIngresosTotal()*100;
    return porcentajeIngreso;
}

const cargarIngreso = () => {
    let obtenerIngreso = '';
    for (let ingreso of ingresos){
        obtenerIngreso += crearIngreso(ingreso);
        document.getElementById('lista-ingresos').innerHTML = obtenerIngreso;
    }
}

const crearIngreso = (ingreso) => {
    let obtenerIngreso = `
        <div id="lista-ingresos">
                    <div class="elemento limpiarEstilos">
                        <div class="elemento_descripcion">${ingreso.tipo}</div>
                        <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">$${ingreso.valor.toFixed(2)}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name='close-outline'></ion-icon>
                            </button>
                        </div>
                        </div>          
                    </div>
                </div>            
    `
    return obtenerIngreso;
}
const cargarEgreso= () => {
    let obtenerEgreso = '';
    for (let egreso of egresos){
        obtenerEgreso += crearEgreso(egreso);
        document.getElementById('lista-egresos').innerHTML = obtenerEgreso;
    }
}

const crearEgreso = (egreso) => {
    let obtenerEgreso = `
        <div id="lista-egresos">
                        <div class="elemento limpiarEstilos">
                            <div class="elemento_descripcion">${egreso.tipo}</div>
                            <div class="derecha limpiarEstilos">
                            <div class="elemento_valor">$${egreso.valor.toFixed(2)}</div>
                            <div class="elemento_porcentaje">%${(egreso.valor/calcularEgresosTotal()*100).toFixed(2)}</div>
                            <div class="elemento_eliminar">
                                <button class="elemento_eliminar--btn">
                                    <ion-icon name='close-outline'></ion-icon>
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>            
    `
    return obtenerEgreso;
}