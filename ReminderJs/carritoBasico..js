/* class Producto {
    constructor(nombre,precio){
        nombre = this.nombre;
        precio = this.precio;
    }
} */


let listaProductos = [];


const agregarProducto = () => {
    
let nombre = document.getElementById('nombreProducto').value;
let precio = parseFloat(document.getElementById('precioProducto').value);

let producto = { nombre: nombre, precio: precio };

listaProductos.push(producto);

document.getElementById('nombreProducto').value = '';
document.getElementById('precioProducto').value = '';

console.log(listaProductos);

mostrarLista();
calcularTotal();

}

const mostrarLista = () => {
    //limpia antes de tin
    document.getElementById('item').innerHTML = "";
    
    //carga los items agregados creando una nueva cadena y sobreescribiendo por medio del inner
    listaProductos.forEach(element, index => {
    document.getElementById('item').innerHTML += `
            <li>
                ${element.nombre} - $${element.precio.toFixed(2)}
                <button onclick="eliminarProducto(${index})">X</button>
            </li>
        `;
    });
    
    calcularTotal();
}

const calcularTotal = () => {
    
    let sumtotal=0;

    listaProductos.forEach(elm => {
        sumtotal += elm.precio; 
    });

    document.getElementById('totalAcumuladoLista').innerHTML = `<div>TOTAL: $${sumtotal}</div>`

}

const eliminarProducto = (index) => {
    
    listaProductos.splice(index, 1);
    mostrarLista();
}